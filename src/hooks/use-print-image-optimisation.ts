// src/hooks/use-print-image-optimization.ts
import { useEffect } from "react";

const CSS_PX_PER_INCH = 96;

function getNaturalSize(
  src: string,
): Promise<{ width: number; height: number; el: HTMLImageElement }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight, el: img });
    img.onerror = reject;
    img.src = src;
  });
}

function downscale(
  loadedImg: HTMLImageElement,
  w: number,
  h: number,
  quality = 0.85,
) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(loadedImg, 0, 0, w, h);
  return canvas.toDataURL("image/jpeg", quality);
}

export function usePrintImageOptimization(
  previewContainerRef: React.RefObject<HTMLElement>,
  { dpi = 200, quality = 0.85 }: { dpi?: number; quality?: number } = {},
) {
  useEffect(() => {
    const container = previewContainerRef.current;
    if (!container) return;

    const originalSrcs = new Map<HTMLImageElement, string>();

    async function optimize() {
      const images = Array.from(container!.querySelectorAll("img"));
      await Promise.all(
        images.map(async (img) => {
          const rect = img.getBoundingClientRect();
          if (!rect.width || !rect.height) return;

          const targetW = Math.round((rect.width / CSS_PX_PER_INCH) * dpi);
          const targetH = Math.round((rect.height / CSS_PX_PER_INCH) * dpi);

          let natural;
          try {
            natural = await getNaturalSize(img.currentSrc || img.src);
          } catch {
            return;
          }
          if (natural.width <= targetW * 1.1) return; // never upscale

          try {
            originalSrcs.set(img, img.src);
            img.src = downscale(natural.el, targetW, targetH, quality);
          } catch {
            // likely a CORS-tainted canvas; leave full-res
          }
        }),
      );
    }

    function restore() {
      originalSrcs.forEach((src, img) => (img.src = src));
      originalSrcs.clear();
    }

    window.addEventListener("beforeprint", optimize);
    window.addEventListener("afterprint", restore);
    return () => {
      window.removeEventListener("beforeprint", optimize);
      window.removeEventListener("afterprint", restore);
    };
  }, [previewContainerRef, dpi, quality]);
}

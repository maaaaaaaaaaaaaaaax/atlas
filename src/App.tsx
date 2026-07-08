import { useRef, useState } from "react";
import { Book } from "./book";
import { ActiveComponentProvider } from "./contexts/ActiveComponentContext";
import { usePrintImageOptimization } from "./hooks/use-print-image-optimisation";
import { Layouter } from "./paged/layouter";
import { Information } from "./preview/information";
import { Navigation, navigationElements } from "./preview/navigation";

export default function App() {
  const ref = useRef<HTMLDivElement>(null!);
  const [isPreviewReady, setIsPreviewReady] = useState(false);
  usePrintImageOptimization(ref, { dpi: 300 });
  return (
    <ActiveComponentProvider>
      <div className="min-h-screen">
        <div id="pagedjsdocroot" style={{ display: "none" }}>
          <Book />
        </div>

        {/* Preview - background layer with lower z-index */}
        <div ref={ref} id="preview" className="z-0 ml-0 md:ml-96"></div>

        {/* Navigation - fixed overlay on the left */}
        <div className="fixed top-0 left-0 z-10 pt-30 m-10 md:block hidden">
          <Navigation
            elements={navigationElements}
            isPreviewReady={isPreviewReady}
          />
        </div>

        <div className="fixed top-0 right-0 z-10 pt-30 m-10 hidden xl:block">
          <Information />
        </div>

        <Layouter onPreviewReady={() => setIsPreviewReady(true)} />
      </div>
    </ActiveComponentProvider>
  );
}

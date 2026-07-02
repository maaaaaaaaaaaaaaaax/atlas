import { useEffect } from "react";

import { VerticalText } from "../typography/vertical-text";

export type Chapter = {
  title: string;
  page: number | null;
  link: string;
  children?: Chapter[];
};

export type AtlasProps = {
  atlas: Chapter[];
};

function fallbackAnchorId(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, "-");
}

function getTargetId(chapter: Chapter): string {
  const link = chapter.link?.trim();
  if (link && link !== "#") {
    return link.replace(/^#/, "");
  }

  return fallbackAnchorId(chapter.title);
}

export function Atlas({ atlas }: AtlasProps) {
  const scrollToTargetId = (targetId: string) => {
    if (!targetId) {
      return;
    }

    const previewContainer = document.querySelector("#preview");
    if (!previewContainer) {
      console.warn("Preview container not found");
      return;
    }

    const targetElement = previewContainer.querySelector(`#${targetId}`);
    if (!targetElement) {
      console.warn(`Target element with id "${targetId}" not found in preview`);
      return;
    }

    const pageElement = targetElement.closest(".pagedjs_page");
    if (pageElement) {
      pageElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToChapter = (chapter: Chapter) => {
    scrollToTargetId(getTargetId(chapter));
  };

  useEffect(() => {
    const handlePreviewAtlasClick = (event: MouseEvent) => {
      const eventTarget = event.target;
      if (!(eventTarget instanceof HTMLElement)) {
        return;
      }

      const clickable = eventTarget.closest<HTMLElement>(
        "#preview [data-atlas-target-id]",
      );
      if (!clickable) {
        return;
      }

      const targetId = clickable.dataset.atlasTargetId;
      if (!targetId) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      scrollToTargetId(targetId);
    };

    document.addEventListener("click", handlePreviewAtlasClick);

    return () => {
      document.removeEventListener("click", handlePreviewAtlasClick);
    };
  }, []);

  return (
    <div className="flex gap-5">
      {atlas.map((chapter, index) => (
        <div
          key={chapter.title + index}
          className="flex flex-row gap-2 cursor-pointer"
          data-atlas-target-id={getTargetId(chapter)}
          onClick={() => scrollToChapter(chapter)}
        >
          <VerticalText
            text={`${chapter.title}-${chapter.page}`}
            classname="atlas"
          />
          {chapter.children &&
            chapter.children.length > 0 &&
            chapter.children.map((subChapter, index) => (
              <div
                key={`${chapter.title}-${subChapter.title}-${index}`}
                className="cursor-pointer"
                style={{ marginTop: `${(index + 1) * 10}px` }}
                data-atlas-target-id={getTargetId(subChapter)}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToChapter(subChapter);
                }}
              >
                <VerticalText
                  text={subChapter.title + "-" + subChapter.page}
                  classname="atlas"
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

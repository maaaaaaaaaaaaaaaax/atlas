import React from "react";

import { useActiveComponent } from "../contexts/ActiveComponentContext";
import { navigationLayout } from "./chapter/layout";
import { navigationPages } from "./chapter/pages";
import { navigationTypography } from "./chapter/typography";
import { navigationVisual } from "./chapter/visual";

export type NavigationComponent = {
  title: string;
  componentUrl?: string;
  implementationUrl?: string;
};

export type NavigationElement = {
  title: string;
  components: NavigationComponent[];
};

export const navigationElements: NavigationElement[] = [
  navigationLayout,
  navigationPages,
  navigationTypography,
  navigationVisual,
];

export type NavigationProps = {
  elements: NavigationElement[];
  isPreviewReady?: boolean;
};

function createAnchorId(title: NavigationComponent["title"]): string {
  return `#${title.toLowerCase().replace(/\s+/g, "-")}`;
}

export function Navigation({
  elements,
  isPreviewReady = false,
}: NavigationProps) {
  const { setActiveComponent } = useActiveComponent();
  const allComponents = elements.flatMap((element) => element.components);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    if (!isPreviewReady) {
      return;
    }

    const targetId = url.replace("#", "");

    const componentTitle = targetId.replace(/-/g, " ");
    const component = allComponents.find(
      (comp) => comp.title.toLowerCase() === componentTitle
    );

    if (component) {
      setActiveComponent(component);
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
    } else {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-fit min-w-1/6">
      {!isPreviewReady && (
        <>
          <p>Loading preview...</p>
        </>
      )}
      {elements.map((element) => (
        <details
          key={element.title}
          className="mb-4 text-white"
          open={elements.indexOf(element) === 0}
        >
          <summary className="font-normal mb-2 text-white font-ibm text-[11px] list-none cursor-pointer hover:bg-tpink hover:text-black">
            {element.title}
          </summary>
          <ul>
            {element.components.map((component) => (
              <li key={createAnchorId(component.title)} className="mb-1">
                <a
                  href={createAnchorId(component.title)}
                  onClick={(e) =>
                    handleNavClick(e, createAnchorId(component.title))
                  }
                  className={`text-white hover:underline pl-5 hover:bg-tpink w-fit hover:text-black link ${
                    !isPreviewReady
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  {component.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}

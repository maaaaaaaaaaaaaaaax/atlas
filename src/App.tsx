import { useState } from "react";
import { Book } from "./book";
import { Layouter } from "./paged/layouter";
import { Information } from "./preview/information";
import { Navigation, navigationElements } from "./preview/navigation";

export default function App() {
  const [isPreviewReady, setIsPreviewReady] = useState(false);

  return (
    <div className="min-h-screen">
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <Book />
      </div>

      {/* Preview - background layer with lower z-index */}
      <div id="preview" className="z-0 ml-96"></div>

      {/* Navigation - fixed overlay on the left */}
      <div className="fixed top-0 left-0 z-10 pt-30 m-10">
        <Navigation
          elements={navigationElements}
          isPreviewReady={isPreviewReady}
        />
      </div>

      <div className="fixed top-0 right-0 z-10 pt-30 m-10 hidden md:block">
        <Information />
      </div>

      <Layouter onPreviewReady={() => setIsPreviewReady(true)} />
    </div>
  );
}

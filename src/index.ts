// Core Paged.js integration
export { Layouter } from "./paged/layouter";

// Layout components
export { PageBreak } from "./components/layout/page-break";
export { ThreeColumnsLeft } from "./components/layout/three-columns-left";
export { ThreeColumnsRight } from "./components/layout/three-columns-right";
export { TwoColumns } from "./components/layout/two-columns";

// Typography components
export { Br } from "./components/typography/br";
export { Footnote } from "./components/typography/footnote";
export { HighlightedBlack } from "./components/typography/highlighted-black";
export { HighlightedPink } from "./components/typography/highlighted-pink";
export { Keyword } from "./components/typography/keyword";
export { List } from "./components/typography/list";
export { ListItem } from "./components/typography/list-item";
export { Quote } from "./components/typography/quote";
export { Repetition } from "./components/typography/repetition";
export { VerticalText } from "./components/typography/vertical-text";

// Visual components
export { Chart } from "./components/visual/chart";
export { Figure } from "./components/visual/figure";
export {
  FigureImage,
  increaseGlobalFigureCounter,
  resetGlobalFigureCounter,
} from "./components/visual/figure-image";

// Page components
export { Atlas } from "./components/pages/atlas";
export { Gallery } from "./components/pages/gallery";
export { ImageReferences } from "./components/pages/image-references";
export { References } from "./components/pages/references";

// Utility components
export { Definition } from "./components/definition";
export {
  DottedLine,
  DottedLineDoubled,
  DottedLineWhite,
} from "./components/dotted-line";
export { PageNumeration } from "./components/page-numeration";

// Types
export type { AtlasProps, Chapter } from "./components/pages/atlas";
export type {
  APAReference,
  ReferenceProps,
} from "./components/pages/references";
export type { ChartItem, ChartProps } from "./components/visual/chart";
export type { FigureProps } from "./components/visual/figure";
export type { ImageReference } from "./components/visual/figure-image";
export type { ChapterNameProps } from "./preview/chapter-name";
export type {
  NavigationComponent,
  NavigationElement,
  NavigationProps,
} from "./preview/navigation";

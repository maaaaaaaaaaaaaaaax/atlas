import { PageBreak } from "./components/layout/page-break";
import { ChapterName } from "./preview/chapter-name";

// Layout components
import {
  SpacerStory,
  ThreeColumnsLeftStory,
  ThreeColumnsRightStory,
  TwoColumnsStory,
} from "./preview/chapter/layout";

// Pages components
import {
  AtlasStory,
  GalleryStory,
  ImageReferencesStory,
  ReferencesStory,
} from "./preview/chapter/pages";

// Typography components
import {
  BrStory,
  FootnoteStory,
  HighlightedBlackStory,
  HighlightedPinkStory,
  KeywordStory,
  ListStory,
  ProposalStory,
  QuoteStory,
  RepetitionStory,
  VerticalTextStory,
} from "./preview/chapter/typography";

// Visual components
import {
  ChartStory,
  FigureImageStory,
  FigureStory,
} from "./preview/chapter/visual";

// Utility components
import {
  CodeBlockStory,
  DefinitionStory,
  DottedLineStory,
  PageNumerationStory,
  SignatureStory,
  SpanAllStory,
} from "./preview/chapter/utility";

export function Book() {
  return (
    <>
      {/* LAYOUT */}
      <div>
        <ChapterName name="two columns" id="two-columns" />
        <TwoColumnsStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns left" id="three-columns-left" />
        <ThreeColumnsLeftStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="three columns right" id="three-columns-right" />
        <ThreeColumnsRightStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="spacer" id="spacer" />
        <SpacerStory />
      </div>

      <PageBreak />

      {/* PAGES */}
      <div>
        <ChapterName name="atlas" id="atlas" />
        <AtlasStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="gallery" id="gallery" />
        <GalleryStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="references" id="references" />
        <ReferencesStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="image references" id="image-references" />
        <ImageReferencesStory />
      </div>

      <PageBreak />

      {/* TYPOGRAPHY */}
      <div>
        <ChapterName name="highlighted black" id="highlighted-black" />
        <HighlightedBlackStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="highlighted pink" id="highlighted-pink" />
        <HighlightedPinkStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="keyword" id="keyword" />
        <KeywordStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="quote" id="quote" />
        <QuoteStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="proposal" id="proposal" />
        <ProposalStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="footnote" id="footnote" />
        <FootnoteStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="list" id="list" />
        <ListStory />
      </div>
      <PageBreak />

      <div>
        <ChapterName name="repetition" id="repetition" />
        <RepetitionStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="vertical text" id="vertical-text" />
        <VerticalTextStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="line break" id="line-break" />
        <BrStory />
      </div>

      <PageBreak />

      {/* VISUAL */}
      <div>
        <ChapterName name="figure" id="figure" />
        <FigureStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="figure image" id="figure-image" />
        <FigureImageStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="chart" id="chart" />
        <ChartStory />
      </div>

      <PageBreak />

      {/* UTILITY */}
      <div>
        <ChapterName name="code block" id="code-block" />
        <CodeBlockStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="definition" id="definition" />
        <DefinitionStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="dotted line" id="dotted-line" />
        <DottedLineStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="page numeration" id="page-numeration" />
        <PageNumerationStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="signature" id="signature" />
        <SignatureStory />
      </div>
      <PageBreak />
      <div>
        <ChapterName name="span all" id="span-all" />
        <SpanAllStory />
      </div>
    </>
  );
}

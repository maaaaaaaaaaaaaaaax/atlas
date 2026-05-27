# Atlas Paged

![Preview](preview.png)

A comprehensive React component library for creating print-ready documents with Paged.js, featuring a built-in development preview system.

## Preview Version

https://atlas-paged.vercel.app/

## Installation

```bash
npm install atlas-paged
```

### Peer Dependencies

```bash
npm install pagedjs tailwindcss
```

## Quick Start

### Paged Layouter Integration

```tsx
import { Layouter, TwoColumns, PageBreak } from "atlas-paged";

function MyDocument() {
  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <TwoColumns>
          <p>Your content here...</p>
        </TwoColumns>
        <PageBreak />
        <p>Next page content...</p>
      </div>

      <div id="preview"></div>
      <Layouter />
    </div>
  );
}
```

### Style imports

Setup your project's `main/index.css` file like the following:

```css
@import "tailwindcss";
@import "atlas-paged/styles";
@source "../node_modules/atlas-paged";
```

#### Print Style imports

As the `Layouter` component is referencing the [print.css](https://github.com/maaaaaaaaaaaaaaaax/atlas/blob/main/public/print.css) file under `/public`, it has to be copy pasted into your projects `/public` folder. Until now I have not found another way.

## Available Components

### Layout Components

- `TwoColumns` - Two-column layout
- `ThreeColumnsLeft` - Three-column layout with emphasis on left
- `ThreeColumnsRight` - Three-column layout with emphasis on right
- `Spacer` - Vertical spacer
- `PageBreak` - Force page breaks

### Typography

- `H1`, `H2`, `H3`, `H4`, `H5` - Styled headings
- `P` - Paragraph component
- `A` - Link component
- `Br` - Line break
- `HighlightedBlack` - Black highlighted text
- `HighlightedPink` - Pink highlighted text
- `Keyword` - Keyword styling
- `Quote` - Block quote
- `Footnote` - Footnote element
- `Citation` - Citation element
- `List` / `ListItem` - List components
- `Proposal` - Proposal text styling
- `Repetition` - Repeated text styling
- `VerticalText` - Vertically oriented text
- `Backpage` - Backpage typography

### Visual Elements

- `Figure` - Figure with caption
- `FigureImage` - Image within a figure
- `Chart` - Chart component

### Page Components

- `Atlas` - Atlas page layout
- `Gallery` - Gallery page layout
- `References` - References page
- `ImageReferences` - Image references page
- `PageNumeration` - Page numbering
- `Layouter` - Main layout engine

### Utility Components

- `Definition` - Definition item
- `DottedLine` - Dotted line separator
- `Signature` - Signature item, provide svg/img path
- `SpanAll` - Spans content across all columns

### Development Tools

- `Navigation` - Preview navigation
- `LoremIpsum` - Lorem ipsum generator
- `ChapterName` - Chapter naming utility

## Technologies Used

React, Vite, TypeScript, Paged.js, Tailwind CSS

This is a comprehensive component library for creating print-ready documents with Paged.js and React. It includes Tailwind CSS integration and TypeScript support, making it easy to build complex, print-ready documents with a custom component architecture.

## License

MIT © Max Schmalenbach

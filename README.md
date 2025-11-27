# Atlas Paged

![Preview](preview.png)

A comprehensive React component library for creating print-ready documents with Paged.js, featuring a built-in development preview system.

## Preview Version
https://atlas-paged.vercel.app/

## Installation

```bash
npm install atlas-paged
```

## Quick Start

### Paged Layouter Integration

```tsx
import { Layouter, TwoColumns, PageBreak } from "atlas-paged";
import "atlas-paged/styles.css"; // Import fonts
import "atlas-paged/print.css"; // Import print styles

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

### Integrate Tailwind styles
Modify your `tailwind.config.js` so that all tailwind classes are safelisted. 

```JS
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-white',
    'text-black', 
    'bg-black',
    'bg-white',
    'text-red-500',
    'text-center',
    'text-justify',
    'text-[5px]',
    'text-[7px]',
    'text-[20px]',
    'font-mono',
    'font-bold',
    'rounded-tr-xs',
    'rounded-full',
    'px-1',
    'py-0.5',
    'px-0.5',
    'pl-2',
    'my-40',
    'w-fit',
    'uppercase',
    'break-inside-avoid',
    '[text-indent:-0.5rem]',
    // Custom theme colors that should work with bg- and text-
    'bg-tpink',
    'bg-tgreen', 
    'bg-tblue',
    'bg-tviolet',
    'text-tpink',
    'text-tgreen',
    'text-tblue', 
    'text-tviolet',
    // Custom fonts
    'font-uncut',
    'font-ibm',
    'font-kapakana',
  ],
};
```

- Position the index.css file inside your project's `src/`
- Position the print.css file inside your project's `public/`

## Available Components

### Layout Components

- `TwoColumns` - Two-column layout
- `ThreeColumnsLeft` - Three-column layout with emphasis on left
- `ThreeColumnsCenter` - Three-column layout with emphasis on center
- `ThreeColumnsRight` - Three-column layout with emphasis on right

### Typography

- `H1`, `H2`, `H3`, `H4`, `H5`, `H6` - Styled headings
- `P` - Paragraph component
- `A` - Link component

### Visual Elements

- `PageBreak` - Force page breaks
- `Divider` - Visual dividers

### Page Components

- `PageNumeration` - Page numbering
- `Layouter` - Main layout engine

### Development Tools

- `Navigation` - Preview navigation
- `LoremIpsum` - Lorem ipsum generator
- `ChapterName` - Chapter naming utility

## Development Workflow

For development with live preview:

```tsx
import { TwoColumnsPage } from "atlas-paged";

function App() {
  return (
    <div>
      <TwoColumnsPage /> {/* Your preview pages */}
    </div>
  );
}
```

## Technologies Used

React, Vite, TypeScript, Paged.js, Tailwind CSS

This is a comprehensive component library for creating print-ready documents with Paged.js and React. It includes Tailwind CSS integration and TypeScript support, making it easy to build complex, print-ready documents with a custom component architecture.

## License

MIT © Max Schmalenbach

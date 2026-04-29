---
name: add-component
description: "Add a new component to the atlas project. Use when creating a new typography, visual, layout, page, or utility component. Covers component file, story file, barrel exports, navigation registration, and book.tsx inclusion."
---

# Add Component

## When to Use

- User asks to create/add a new component
- A new reusable element needs to be part of the atlas book

## Categories

Components belong to one of these categories:

| Category        | Component dir                | Story dir                         | Index file                                |
| --------------- | ---------------------------- | --------------------------------- | ----------------------------------------- |
| typography      | `src/components/typography/` | `src/preview/chapter/typography/` | `src/preview/chapter/typography/index.ts` |
| visual          | `src/components/visual/`     | `src/preview/chapter/visual/`     | `src/preview/chapter/visual/index.ts`     |
| layout          | `src/components/layout/`     | `src/preview/chapter/layout/`     | `src/preview/chapter/layout/index.ts`     |
| pages           | `src/components/pages/`      | `src/preview/chapter/pages/`      | `src/preview/chapter/pages/index.ts`      |
| other (utility) | `src/components/`            | `src/preview/chapter/other/`      | `src/preview/chapter/other/index.ts`      |

## Procedure

### 1. Create the component file

Location: `src/components/<category>/<component-name>.tsx` (or `src/components/<component-name>.tsx` for utility)

```tsx
export type <ComponentName>Props = {
  // props
};

export function <ComponentName>({ ...props }: <ComponentName>Props) {
  return (
    // implementation
  );
}
```

### 2. Create the story file

Location: `src/preview/chapter/<category>/<component-name>.story.tsx`

The story demonstrates the component with example data:

```tsx
import { <ComponentName> } from "../../../components/<path-to-component>";

export function <ComponentName>Story() {
  return (
    // usage example with sample data
  );
}
```

### 3. Export from the category index

Add to `src/preview/chapter/<category>/index.ts`:

1. **Add the named export** for the story:

   ```ts
   export { <ComponentName>Story } from "./<component-name>.story";
   ```

2. **Add to the navigation components array** in the same file:

   ```ts
   {
     title: "<display name>",
     componentUrl: "/<category>/<component-name>.tsx",
     implementationUrl: "<category>/<component-name>.story.tsx",
   },
   ```

   For utility ("other") components, `componentUrl` uses `/components/<component-name>.tsx` and `implementationUrl` uses `other/<component-name>.story.tsx`.

### 4. Add to book.tsx

In `src/book.tsx`:

1. **Import the story** — either via the barrel export (for typography/other) or directly:

   ```ts
   import { <ComponentName>Story } from "./preview/chapter/<category>/<component-name>.story";
   ```

   Or if the category uses barrel imports (typography, other):

   ```ts
   import { <ComponentName>Story } from "./preview/chapter/<category>";
   ```

2. **Add the chapter entry** in the correct section (`{/* TYPOGRAPHY */}`, `{/* VISUAL */}`, `{/* LAYOUT */}`, `{/* PAGES */}`, `{/* COMPONENTS */}`):
   ```tsx
   <PageBreak />
   <div>
     <ChapterName name="<display name>" id="<kebab-case-id>" />
     <<ComponentName>Story />
   </div>
   ```

## Naming Conventions

- Component file: `kebab-case.tsx`
- Story file: `kebab-case.story.tsx`
- Export name: `PascalCase` (component), `PascalCaseStory` (story)
- Navigation title: lowercase with spaces (e.g. "highlighted black")
- Book id: kebab-case (e.g. "highlighted-black")

## Checklist

- [ ] Component file created in correct directory
- [ ] Story file created with example usage
- [ ] Story exported from category `index.ts`
- [ ] Navigation entry added to category `index.ts` with correct `componentUrl` and `implementationUrl`
- [ ] Story imported in `src/book.tsx`
- [ ] Chapter entry added in `src/book.tsx` under the correct section comment

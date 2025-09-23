export { BrStory } from "./br.story";
export { FootnoteStory } from "./footnote.story";
export { HighlightedBlackStory } from "./highlighted-black.story";
export { HighlightedPinkStory } from "./highlighted-pink.story";
export { KeywordStory } from "./keyword.story";
export { ListStory } from "./list.story";
export { QuoteStory } from "./quote.story";
export { RepetitionStory } from "./repetition.story";
export { VerticalTextStory } from "./vertical-text.story";

import { NavigationElement } from "../../navigation";

export const navigationTypography: NavigationElement = {
  title: "typography",
  components: [
    {
      title: "highlighted black",
      componentUrl: "/typography/highlighted-black.tsx",
      implementationUrl: "typography/highlighted-black.story.tsx",
    },
    {
      title: "highlighted pink",
      componentUrl: "/typography/highlighted-pink.tsx",
      implementationUrl: "typography/highlighted-pink.story.tsx",
    },
    {
      title: "keyword",
      componentUrl: "/typography/keyword.tsx",
      implementationUrl: "typography/keyword.story.tsx",
    },
    {
      title: "quote",
      componentUrl: "/typography/quote.tsx",
      implementationUrl: "typography/quote.story.tsx",
    },
    {
      title: "footnote",
      componentUrl: "/typography/footnote.tsx",
      implementationUrl: "typography/footnote.story.tsx",
    },
    {
      title: "list",
      componentUrl: "/typography/list.tsx",
      implementationUrl: "typography/list.story.tsx",
    },
    {
      title: "repetition",
      componentUrl: "/typography/repetition.tsx",
      implementationUrl: "typography/repetition.story.tsx",
    },
    {
      title: "vertical text",
      componentUrl: "/typography/vertical-text.tsx",
      implementationUrl: "typography/vertical-text.story.tsx",
    },
    {
      title: "line break",
      componentUrl: "/typography/br.tsx",
      implementationUrl: "typography/br.story.tsx",
    },
  ],
};

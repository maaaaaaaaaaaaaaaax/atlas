import { NavigationElement } from "../../navigation";

export { DefinitionStory } from "./definition.story";
export { DottedLineStory } from "./dotted-line.story";
export { PageNumerationStory } from "./page-numeration.story";
export { SignatureStory } from "./signature.story";

export const navigationUtility: NavigationElement = {
  title: "utility",
  components: [
    {
      title: "definition",
      componentUrl: "/components/definition.tsx",
      implementationUrl: "other/definition.story.tsx",
    },
    {
      title: "dotted line",
      componentUrl: "/components/dotted-line.tsx",
      implementationUrl: "other/dotted-line.story.tsx",
    },
    {
      title: "page numeration",
      componentUrl: "/components/page-numeration.tsx",
      implementationUrl: "other/page-numeration.story.tsx",
    },
    {
      title: "signature",
      componentUrl: "/components/signature.tsx",
      implementationUrl: "other/signature.story.tsx",
    },
  ],
};

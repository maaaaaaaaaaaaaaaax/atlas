export { ChartStory } from "./chart.story";
export { FigureImageStory } from "./figure-image.story";
export { FigureStory } from "./figure.story";

import { NavigationElement } from "../../navigation";

export const navigationVisual: NavigationElement = {
  title: "visual",
  components: [
    {
      title: "figure",
      componentUrl: "/visual/figure.tsx",
      implementationUrl: "visual/figure.story.tsx",
    },
    {
      title: "figure-image",
      componentUrl: "/visual/figure-image.tsx",
      implementationUrl: "visual/figure-image.story.tsx",
    },
    {
      title: "chart",
      componentUrl: "/visual/chart.tsx",
      implementationUrl: "visual/chart.story.tsx",
    },
  ],
};

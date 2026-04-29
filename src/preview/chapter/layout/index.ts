import { NavigationElement } from "../../navigation";

export const navigationLayout: NavigationElement = {
  title: "layout",
  components: [
    {
      title: "two columns",
      componentUrl: "/layout/two-columns.tsx",
      implementationUrl: "layout/two-columns.story.tsx",
    },
    {
      title: "three columns left",
      componentUrl: "/layout/three-columns-left.tsx",
      implementationUrl: "/layout/three-columns-left.story.tsx",
    },
    {
      title: "three columns right",
      componentUrl: "/layout/three-columns-right.tsx",
      implementationUrl: "/layout/three-columns-right.story.tsx",
    },
    {
      title: "spacer",
      componentUrl: "/layout/spacer.tsx",
      implementationUrl: "layout/spacer.story.tsx",
    },
  ],
};

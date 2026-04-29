import { NavigationElement } from "../../navigation";

export { AtlasStory } from "./atlas.story";
export { GalleryStory } from "./gallery.story";
export { ImageReferencesStory } from "./image-references.story";
export { ReferencesStory } from "./references.story";

export const navigationPages: NavigationElement = {
  title: "pages",
  components: [
    {
      title: "atlas",
      componentUrl: "/pages/atlas.tsx",
      implementationUrl: "pages/atlas.story.tsx",
    },
    {
      title: "gallery",
      componentUrl: "/pages/gallery.tsx",
      implementationUrl: "/pages/gallery.story.tsx",
    },
    {
      title: "references",
      componentUrl: "/pages/references.tsx",
      implementationUrl: "/pages/references.story.tsx",
    },
    {
      title: "image references",
      componentUrl: "/pages/image-references.tsx",
      implementationUrl: "/pages/image-references.story.tsx",
    },
  ],
};

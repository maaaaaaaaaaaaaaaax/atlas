import { Definition } from "../../../components/definition";
import { getLoremIpsum } from "../../lorem-ipsum";

export function DefinitionStory() {
  const toBeDefined = getLoremIpsum("short");
  const description = getLoremIpsum("long");

  return (
    <div className="flex flex-col gap-8">
      <Definition toBeDefined={toBeDefined} apaReference="(Smith, 2023)">
        {description}
      </Definition>
    </div>
  );
}

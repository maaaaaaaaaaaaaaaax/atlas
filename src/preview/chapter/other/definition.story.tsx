import { Definition } from "../../../components/definition";
import { getLoremIpsum } from "../../lorem-ipsum";

export function DefinitionStory() {
  return (
    <Definition
      toBeDefined={getLoremIpsum("short")}
      apaReference="(Smith, 2023)"
    >
      {getLoremIpsum("long")}
    </Definition>
  );
}

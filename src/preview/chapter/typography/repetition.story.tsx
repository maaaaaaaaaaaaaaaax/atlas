import { TwoColumns } from "../../../components/layout/two-columns";
import { Repetition } from "../../../components/typography/repetition";
import { getLoremIpsum } from "../../lorem-ipsum";

export function RepetitionStory() {
  return (
    <>
      <TwoColumns>
        <Repetition>{getLoremIpsum("short")}</Repetition>
        <Repetition fullWidth>{getLoremIpsum("long")}</Repetition>
      </TwoColumns>
    </>
  );
}

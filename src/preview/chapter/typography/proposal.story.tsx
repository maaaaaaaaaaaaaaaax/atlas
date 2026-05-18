import { Br } from "../../../components/typography";
import { Proposal } from "../../../components/typography/proposal";
import { getLoremIpsum } from "../../lorem-ipsum";

export function ProposalStory() {
  return (
    <Proposal>
      {getLoremIpsum("extraLong")}
      <Br />
      {getLoremIpsum("extraLong")}
    </Proposal>
  );
}

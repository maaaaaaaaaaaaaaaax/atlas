import { Br, ProposalEnd, ProposalStart } from "../../../components/typography";

import { getLoremIpsum } from "../../lorem-ipsum";

export function ProposalStory() {
  return (
    <p>
      <ProposalStart>start</ProposalStart>
      {getLoremIpsum("extraLong")}
      <Br />
      {getLoremIpsum("extraLong")}
      <ProposalEnd>end</ProposalEnd>
    </p>
  );
}

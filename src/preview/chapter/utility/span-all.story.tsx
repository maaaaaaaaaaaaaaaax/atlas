import { TwoColumns } from "../../../components/layout/two-columns";
import { SpanAll } from "../../../components/span-all";
import { LoremIpsum } from "../../lorem-ipsum";

export function SpanAllStory() {
  return (
    <TwoColumns>
      <LoremIpsum content="extraLong" />

      <SpanAll>
        <h2>This spans the two col layout</h2>
        <LoremIpsum content="extraLong" />
      </SpanAll>

      <LoremIpsum content="short" />
    </TwoColumns>
  );
}

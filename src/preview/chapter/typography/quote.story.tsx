import { Quote } from "../../../components/typography/quote";
import { LoremIpsum } from "../../lorem-ipsum";

export function QuoteStory() {
  return (
    <div>
      <LoremIpsum content="normal" />

      <Quote>
        <LoremIpsum content="normal" />
      </Quote>

      <LoremIpsum content="long" />

      <Quote>
        <LoremIpsum content="long" />
      </Quote>

      <LoremIpsum content="normal" />
    </div>
  );
}

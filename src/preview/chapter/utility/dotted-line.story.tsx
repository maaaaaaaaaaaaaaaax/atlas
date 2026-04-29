import {
  DottedLine,
  DottedLineDoubled,
  DottedLineWhite,
} from "../../../components/dotted-line";
import { LoremIpsum } from "../../lorem-ipsum";

export function DottedLineStory() {
  return (
    <div>
      <LoremIpsum content="normal" />

      <DottedLine />

      <LoremIpsum content="short" />

      <DottedLineDoubled />

      <LoremIpsum content="long" />

      <DottedLine />

      <LoremIpsum content="normal" />

      <div className="bg-black p-4 my-4">
        <p className="text-white mb-2">White dotted line on dark background:</p>
        <DottedLineWhite />
        <p className="text-white mt-2">Continues with more content</p>
      </div>
      <DottedLineDoubled />

      <LoremIpsum content="short" />
    </div>
  );
}

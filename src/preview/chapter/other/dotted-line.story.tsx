import {
  DottedLine,
  DottedLineDoubled,
  DottedLineWhite,
} from "../../../components/dotted-line";
import { LoremIpsum } from "../../lorem-ipsum";

export function DottedLineStory() {
  return (
    <div>
      <p>
        <LoremIpsum content="normal" />
      </p>
      <DottedLine />
      <p>
        <LoremIpsum content="short" />
      </p>
      <DottedLineDoubled />
      <p>
        <LoremIpsum content="long" />
      </p>
      <DottedLine />
      <p>
        <LoremIpsum content="normal" />
      </p>
      <div className="bg-black p-4 my-4">
        <p className="text-white mb-2">White dotted line on dark background:</p>
        <DottedLineWhite />
        <p className="text-white mt-2">Continues with more content</p>
      </div>
      <DottedLineDoubled />
      <p>
        <LoremIpsum content="short" />
      </p>
    </div>
  );
}

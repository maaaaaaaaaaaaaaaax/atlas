import { CodeBlock } from "../../../components/code-block";

const sampleCode = `import { Figure, FigureImage } from "atlas-paged";

export function Example() {
  return (
    <Figure title="Architecture">
      <FigureImage src="/assets/diagram.png" alt="System diagram" />
    </Figure>
  );
}`;

export function CodeBlockStory() {
  return (
    <>
      <div className="space-y-4">
        <p className="font-bold">TypeScript example</p>
        <CodeBlock language="typescript" code={sampleCode} />
      </div>
      <div className="space-y-4">
        <p className="font-bold">Inline example</p>
        <p>
          Use <CodeBlock variant="inline" code="npm run build" /> to create a
          production build.
        </p>
      </div>
    </>
  );
}

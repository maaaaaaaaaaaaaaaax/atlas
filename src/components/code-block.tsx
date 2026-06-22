import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type CodeBlockProps = {
  code: string;
  language?: string;
  variant?: "block" | "inline";
};

export function CodeBlock({
  code,
  language = "typescript",
  variant = "block",
}: CodeBlockProps) {
  if (variant === "inline") {
    return (
      <code
        style={{
          fontSize: "11px",
          lineHeight: "14px",
          padding: "1px 4px",
          borderRadius: "3px",
          backgroundColor: "rgb(248, 248, 255)",
          whiteSpace: "pre-wrap",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
      >
        {code}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      customStyle={{
        fontSize: "11px",
        lineHeight: "14px",
        padding: "10px",
        margin: 0,
      }}
      codeTagProps={{
        style: {
          fontSize: "inherit",
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}

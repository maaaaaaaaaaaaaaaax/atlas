import { HighlightedPink } from "./typography";
import { VerticalText } from "./typography/vertical-text";

export type DefinitionProps = {
  toBeDefined: string;
  apaReference?: string;
  children: React.ReactNode;
  isVertical?: boolean;
};

export function Definition({
  toBeDefined,
  apaReference,
  children,
  isVertical = true,
}: DefinitionProps) {
  return (
    <div className="flex flex-row gap-x-2">
      {isVertical ? (
        <VerticalText text={toBeDefined} />
      ) : (
        <HighlightedPink>
          <p>{toBeDefined}</p>
        </HighlightedPink>
      )}
      <div>
        <p>
          {children}
          {apaReference && (
            <span className="ml-4 citation">{apaReference}</span>
          )}
        </p>
      </div>
    </div>
  );
}

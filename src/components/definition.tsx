import { VerticalText } from "./typography/vertical-text";

export type DefinitionProps = {
  toBeDefined: string;
  apaReference?: string;
  children: React.ReactNode;
};

export function Definition({
  toBeDefined,
  apaReference,
  children,
}: DefinitionProps) {
  return (
    <div className="flex flex-row gap-x-2">
      <VerticalText text={toBeDefined} />
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

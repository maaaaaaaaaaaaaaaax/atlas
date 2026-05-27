export type SpanAllProps = {
  children: React.ReactNode;
};

export function SpanAll({ children }: SpanAllProps) {
  return <div style={{ columnSpan: "all" }}>{children}</div>;
}

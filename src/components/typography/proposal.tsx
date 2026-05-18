export type ProposalProps = {
  children: React.ReactNode;
};

export function Proposal({ children }: ProposalProps) {
  return <p className="text-tviolet">{children}</p>;
}

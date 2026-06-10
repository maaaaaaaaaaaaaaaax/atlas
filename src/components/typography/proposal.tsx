export type ProposalProps = {
  children: React.ReactNode;
};

export function ProposalStart({ children }: ProposalProps) {
  return <span className="bg-gradient-to-r from-tviolet">{children}</span>;
}

export function ProposalEnd({ children }: ProposalProps) {
  return <span className="bg-gradient-to-l from-tviolet">{children}</span>;
}

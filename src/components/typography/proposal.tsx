export type ProposalProps = {
  children: React.ReactNode;
};

export function ProposalStart({ children }: ProposalProps) {
  return (
    <span className="bg-gradient-to-r from-tviolet to-white">{children}</span>
  );
}

export function ProposalEnd({ children }: ProposalProps) {
  return (
    <span className="bg-gradient-to-l from-tviolet to-white">{children}</span>
  );
}

export type SignatureProps = { path: string };

export function Signature({ path }: SignatureProps) {
  const signature = import.meta.env.VITE_SIGNATURE;

  if (signature === "true") {
    return (
      <div>
        <img className="w-3/4" src={path} alt="signature"></img>
      </div>
    );
  }

  return null;
}

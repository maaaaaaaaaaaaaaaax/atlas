import { Signature } from "../../../components/signature";

export function SignatureStory() {
  return (
    <div>
      <p>Define VITE_SIGNATURE inside your .env as true</p>
      <Signature path="/signature.png" />
    </div>
  );
}

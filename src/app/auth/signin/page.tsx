import Link from "next/link";

export default function Signin() {
  return (
    <div>
      <h1>Signin</h1>
      <Link href="/auth/signup">Ir para signup</Link>
    </div>
  )
}

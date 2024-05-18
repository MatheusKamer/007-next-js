import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <Link href="/auth/signin">Ir para signin</Link>
    </div>
  )
}

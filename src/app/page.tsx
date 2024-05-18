'use client'

import Link from "next/link";

export default function Home() {
    return (
    <div>
      <Link href="/auth/signin">Ir para signin</Link>
    </div>
  );
}

'use client'

import Link from "next/link";

export default function Home() {
    return (
    <div className="flex flex-col text-black bg-white gap-2 p-2">
      <Link href="/auth/signin">Ir para signin</Link>
    </div>
  );
}

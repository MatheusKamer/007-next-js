'use client'

import Link from "next/link";
import { useState } from "react";

export default function AuthLayout({ children } : { children: React.ReactNode }) {
  const [ count, setCount ] = useState(0);

  return (
    <div className="flex gap-6 w-full">
      <Link className="bg-white text-black" href="/">Home</Link>

      <div className="bg-white text-black px-2">
        <button onClick={() => setCount(count + 1)}>Clicou {count} vezes</button>
      </div>

      <div className="w-1/2 bg-red-500">{children}</div>
      <div className="w-1/2 bg-blue-500">Imagem do app</div>
    </div>
  )
}

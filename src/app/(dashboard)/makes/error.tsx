'use client'

export default function Error() {
  return (
    <div>
      <h1 className="mb-4 font-xlg">Erro</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56">
          <h3>Erro ao carregar a página</h3>
        </div>
      </div>
    </div>
  );
}

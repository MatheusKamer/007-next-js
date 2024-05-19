interface IMakeProps {
  params: {
    make: string;
  };
}

export default function Make({ params }: IMakeProps) {
  return (
    <div>
      <h1 className="mb-4 font-xlg">Marcas</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56">
          <h3>Todos os veículos da marca {params.make.toUpperCase()}</h3>
        </div>
      </div>
    </div>
  );
}

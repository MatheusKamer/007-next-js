async function getMakes() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Honda' },
    { id: 3, name: 'Ford' },
  ]
}

export default async function Vehicles() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className="mb-4 font-xlg">Marcas</h1>
      <div className="grid grid-cols-3 gap-4">
        {makes.map((make: any) => (
          <div className="rounded-lg bg-zinc-900 border border-zinc-700 grid place-items-center h-56" key={make.id}>
            <h3>{make.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

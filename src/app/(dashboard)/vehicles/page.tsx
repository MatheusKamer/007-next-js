async function getVehicles() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: 1, make: 'Toyota', model: 'Camry', year: '2021' },
    { id: 2, make: 'Honda', model: 'Civic', year: '2024'},
    { id: 3, make: 'Ford', model: 'Mustang', year: '2023'},
  ];
}
export default async function Vehicles() {
  const vehicles = await getVehicles();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="bg-white text-black p-1">Veículos</h1>
      <div>
        {vehicles.map((vehicle: any) => (
          <div className="flex gap-4 mt-2" key={vehicle}>
            <p>{vehicle.id}.</p>
            <h3>{vehicle.make}</h3>
            <p>{vehicle.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

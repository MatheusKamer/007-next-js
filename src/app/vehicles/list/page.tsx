export default function VehiclesList() {
  const vehicles = [
    { id: 1, make: 'Toyota', model: 'Camry', year: '2021' },
    { id: 2, make: 'Honda', model: 'Civic', year: '2024'},
    { id: 3, make: 'Ford', model: 'Mustang', year: '2023'},

  ]

  return (
    <div>
      {vehicles.map((vehicle) => (
        <div className="flex gap-2" key={vehicle.id}>
          <h3>{vehicle.make}</h3>
          <p>{vehicle.model}</p>
        </div>
      ))}
    </div>
  );
}

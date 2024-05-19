export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-20 border-b border-zinc-800 flex items-center">
        <div className="container mx-auto px-10">
          <strong>
            Jstacar
          </strong>
        </div>
      </header>

      <div className="mt-10 container mx-auto px-10">
        {children}
      </div>
    </div>
  );
}

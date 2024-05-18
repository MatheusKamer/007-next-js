'use client'

export default function Home() {
    const handleAlert = () => {
      alert('Clicou');
    }

    return (
    <div>
      <button onClick={() => handleAlert()}>
        Clicou
      </button>
    </div>
  );
}

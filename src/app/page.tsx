'use client'

export default function Home() {
    const { appName } = window.navigator;

    return (
    <div>
      <button onClick={() => alert(appName)}>
        Clicou
      </button>
    </div>
  );
}

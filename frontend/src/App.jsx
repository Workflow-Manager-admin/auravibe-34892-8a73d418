import React from "react";

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-timesnewroman">
      <header className="w-full bg-black border-b border-white/10 py-5 px-8 flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-accent">*</span>
          <span className="tracking-wide">My AuraGram</span>
        </div>
        <button className="bg-accent text-black font-timesnewroman font-semibold rounded px-5 py-2 hover:bg-white transition">
          Get Started
        </button>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center w-full pt-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-accent text-lg font-medium mb-4">A vibey social experience</div>
          <h1 className="text-5xl font-bold mb-4 font-timesnewroman">Welcome to My AuraGram</h1>
          <div className="text-white/80 text-base font-timesnewroman mb-8">
            Express your aura, share your vibes – connect through posts, stories, and more.<br />
            Built for creativity and connection. Black, white, and always in style.
          </div>
          <button className="bg-accent text-black font-timesnewroman px-8 py-3 rounded font-semibold text-lg transition hover:bg-white">
            Sign Up
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

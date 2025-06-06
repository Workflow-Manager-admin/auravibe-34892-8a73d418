import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-timesnewroman">
      <nav className="w-full px-0 py-0 border-b border-white/10 bg-black fixed top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-accent text-2xl">*</span>
            <span className="tracking-wide">KAVIA AI</span>
          </div>
          <button className="bg-accent text-black font-timesnewroman font-medium rounded px-5 py-2 transition hover:bg-white">Template Button</button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="max-w-3xl w-full mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-7 pt-32 pb-16">
            <div className="text-accent text-lg font-medium">AI Workflow Manager Template</div>
            <h1 className="text-5xl font-bold mb-2 font-timesnewroman">auraVibe</h1>
            <div className="text-base text-white/70 max-w-lg mb-4 font-timesnewroman">
              Start building your application.
            </div>
            <button className="bg-accent text-black font-timesnewroman px-8 py-3 rounded font-semibold text-lg transition hover:bg-white">Button</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
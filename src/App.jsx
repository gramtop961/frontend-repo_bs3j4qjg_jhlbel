import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import CollectionGrid from './components/CollectionGrid.jsx';
import VideoBanner from './components/VideoBanner.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[#A020F0]/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero3D />
        <CollectionGrid />
        <VideoBanner />
      </main>
    </div>
  );
}

export default App;

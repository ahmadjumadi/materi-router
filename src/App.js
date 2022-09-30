import * as React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './style.css'; 

function App() {
  return (
    <div className="App">
      <h1>Salam dari Router React</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

// Sebetulnya tidak disarankan tapi gpp lah cuma buat belajar ini, INGETTT..

function Home() {
  return (
    <>
      <main>
        <h2>Hallo ini halaman homepage</h2>
        <p>Mari belajar Routing</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Hallo ini halaman About</h2>
        <p>Mari belajar Routing</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}
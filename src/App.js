import * as React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import './style.css'; 
import CustomForm from "./components/CustomForm";
import AnimalDetailPage from "./containers/AnimalDetailPage";
import AnimalListPage from "./containers/AnimalListPage";

function App() {
  return (
    <div className="App">
      <h1>Salam dari Router React</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<CustomForm />} />
        <Route path="/animal/:animalId" element={<AnimalDetailPage />} />
        <Route path="/animals" element={<AnimalListPage />} >
          <Route path=":animalId" element={<AnimalDetailPage />} />
        </Route>
        <Route path="*" style={{ padding: "1rem" }} element={<main><h3>404 - Not Found</h3></main>} />
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
        <Link style={{ marginLeft: 2 }} to="/form">Form</Link>
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
        <Link style={{ marginLeft: 2 }} to="/form">Form</Link>
      </nav>
    </>
  )
}
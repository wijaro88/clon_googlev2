import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div id="root">
      <div className="app">
        <header className="header">
          <div className="header-left">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
          </div>
          <div className="header-right">
            <a href="/gmail" className="link">Gmail</a>
            <a href="/images" className="link">Imágenes</a>
            <div className="profile">
              <img src="https://via.placeholder.com/24" alt="Profile Icon" />
            </div>
          </div>
        </header>

        <main className="main">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar con Google"
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z" />
                </svg>
              </button>
            </form>
            <button className="lucky-button">Voy a tener suerte</button>
          </div>
        </main>
          <div className="spacer"></div> 
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <a href="/about" className="link">Sobre Google</a>
              <a href="/advertising" className="link">Publicidad</a>
              <a href="/business" className="link">Negocios</a>
              <a href="/how-search-works" className="link">Cómo funciona la Búsqueda</a>
            </div>
            <div className="footer-links">
              <a href="/privacy" className="link">Privacidad</a>
              <a href="/terms" className="link">Condiciones</a>
              <a href="/preferences" className="link">Preferencias</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

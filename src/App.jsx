import './App.css';
import { Outlet } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx'


function App() {
  const { darkMode, toggleDarkMode } = useTheme(); // Use o hook useTheme

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header>
        <button className="dark" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

      </header>
      <main>
        <Outlet /> {/* Renderiza as rotas filhas */}
      </main>
    </div>
  );
}

export default App;
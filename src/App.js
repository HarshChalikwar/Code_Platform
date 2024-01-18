import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar.js';
import DataTable from './Components/DataTable.js'; 
import './App.css';


export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Navbar />
        
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

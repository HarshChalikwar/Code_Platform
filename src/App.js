import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar.js';
import { useEffect } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";

import './App.css';


export const ThemeContext = createContext(null);

const App = () => {

  const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            setValue(data.user.displayName)
            localStorage.setItem("name",data.user.displayName)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      {value?<ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Navbar />
        
      
      </div>
    </ThemeContext.Provider>:
        <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
  );
};

export default App;

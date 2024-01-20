import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar.js';
import { useEffect } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";

import { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

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
    //<button onClick={handleClick}>Signin With Google</button>
    <div>
        <Form className="login-form">
          <h1 className="text-center">
            <span className="font-weight-bold">Login Form</span>
          </h1>
          <h2 className="text-center">Welcome back</h2>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <Button className="btn-lg btn-block">Log in</Button>
          <div className="text-center pt-3">Or</div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <GoogleLoginButton onClick={handleClick} buttonText="Login" className="mt-3 mb-3" />

          <div className="text-center">
            <a href="/sign-up">Sign up</a>
          </div>
        </Form>
      </div>
  }
    </div>
  );
};

export default App;

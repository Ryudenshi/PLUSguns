import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore"
import WeaponStore from './store/WeaponStore';


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
      user: new UserStore(),
      weapons: new WeaponStore(),
    }}>
      <App />
    </Context.Provider>
  )

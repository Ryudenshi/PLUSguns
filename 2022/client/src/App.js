import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import Footer from './components/Footer';

const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setRole(data.role)
        user.setUser(data.id)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 10)
  })

  if (loading) {
    return <Spinner animation={"border"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;

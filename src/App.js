import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { getAccountAPI } from './services/api.service';
import { AuthContext } from "../context/auth.context";

const App = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []) // ngoac [] chi chay 1 lan`

  const fetchUserInfo = async() => {
    const res = await getAccountAPI();
    if (res.data){
      setUser(res.data.user)
    }
  }
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App;
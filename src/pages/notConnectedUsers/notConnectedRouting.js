import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Signin from '../../components/authentification/Signin';
import Signup from '../../components/authentification/Signup';

const notConnectedRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default notConnectedRouting;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConnectedHome from './home/ConnectedHome';

const connectedRouting = () => {
  return (
    <Routes>
      <Route path="/home" element={<ConnectedHome />} />
    </Routes>
  );
};

export default connectedRouting;

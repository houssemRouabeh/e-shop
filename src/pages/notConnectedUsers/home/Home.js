import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Showcase from '../../../components/showcase/Showcase';
import Footer from '../../../components/footer/Footer';
import LogoGrid from '../../../components/logoGrid/LogoGrid';
import { Divider } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Divider />
      <LogoGrid />
      <Footer />
    </>
  );
};

export default Home;

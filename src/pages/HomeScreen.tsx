import React, { useState } from 'react';
import { Home } from '../components/Home';
import { InfoSection, about, porfolio, contactMe } from '../components/InfoSection';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen(prevState => !prevState)

  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <Home />
      <InfoSection {...porfolio} />
      <InfoSection {...about} />
      <InfoSection {...contactMe} />
    </>
  )
}

export default HomeScreen

import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import { userQuery } from '../utils/data';
import { client } from '../client';
import Pins from './Pins';
import logoB from '../assets/logo-b.png';
import logoW from '../assets/logo-w.png';
import Logo from '../components/Logo';

const Home = ({theme, isActive}) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [ logoTheme, setLogoTheme ] = useState(localStorage.getItem("theme"))
  const [user, setUser] = useState();
  const scrollRef = useRef(null);

  const userInfo = sessionStorage.getItem('user') !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')) : sessionStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });

  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  useEffect(() => {
    console.log("logo theme changed in Home")
  }, [logoTheme]);

  const test = () => {
    console.log(logoTheme)
    console.log(theme)
    
  }
  return (
    <div className="flex bg-gray-100 dark:bg-dark dark:text-white md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between dark:bg-black items-center shadow-md">
          <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
          <Link to="/">
            <img src={logoW} alt="logo" width={150} className="pt-1 hidden dark:block" />
            <img src={logoB} alt="logo" width={150} className="pt-1 block dark:hidden" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full " />
          </Link>
        </div>
        {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
          </div>
          <Sidebar closeToggle={setToggleSidebar} user={user && user} />
        </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
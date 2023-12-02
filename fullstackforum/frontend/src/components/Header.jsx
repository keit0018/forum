import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import SignupForm from './SignupForm';

const Header = () => {
    let Links = [
        {name: 'Home', link:'/'},
        {name: 'Following', link:'/following'},
        {name: 'Chat', link:'/chat'},
        {name: 'Profile', link:'/profile'},
    ]

  return (
    <Router>
    <div className='shadow-md w-full'>
        <div className='md:px-10 py-4 px-7 md:flex justify-between items-cente bg-white py-4'>

            <div className='flex text-2xl cursor-pointer items-center gap-1'>
                <span className='font-bold'>Besties</span>
            </div>

            <ul className='md:flex pl-9 md:pl-0 '>
                {Links.map(link => 
                <li className='font-semibold my-7 md:my-0 md:ml-8 '>
                     <Link to={link.link}>{link.name}</Link>
                </li>)}
            </ul>

            <Link to="/login" className='btn bg-blue-500 text-white py-1 px-3 md:ml-8 rounded'>Login</Link>
        </div>
    </div>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/following" element={<Following/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignupForm/>}/>
    </Routes>
    </Router>
   
  )
}

export default Header
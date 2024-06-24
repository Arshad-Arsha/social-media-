import React from 'react'
import{Outlet, RouterProvider, createBrowserRouter,} from 'react-router-dom'
// Pages..................
import Login from '../pages/login/Login'
import Signup from '../pages/signup/signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'

// Components..................
import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import Rightbar from '../components/rightbar/Rightbar'

export default function LayOut() {

//feed.........
const Feed =()=>{
  return (
    <>
    <Nav />
    <main>
      <LeftBar />
      <div className="container">
        <Outlet />
      </div>
      <Rightbar />
    </main>
    </>
  )
}
// Router...........
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Feed /> ,
      children: [
        {
          path: '/',
           element : <Home />
        },
        {
          path: '/profile/:id',
           element : <Profile />
        },
        {
          path: '/chatBox/:id',
           element : <ChatBox />
        },
      ]
    },
    {
      path: '/login',
      element : <Login />
    },
    
    {
      path: '/signup',
      element : <Signup />
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

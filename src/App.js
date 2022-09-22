import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreatePost from './pages/create-post/CreatePost'
import AddBeat from './pages/add-beat/AddBeat'
import BeatsList from './pages/beats-list/BeatsList'
import LandingPage from './pages/landing-page/LandingPage'
import Landing from './pages/landing-page/Landing'
import PostDetails from './pages/post-details/PostDetails'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { Navbar } from './images/layout/navbar/Navbar'
import Rightbar from './components/Rightbar'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import logo from './images/logo_official.png'
import { UAuthMoralisConnector } from '@uauth/moralis'
import { useMoralis } from 'react-moralis'
import { uauth } from './connectors'
import UAuth from '@uauth/js'

const App = () => {
  const { isAuthenticated, logout, authenticate } = useMoralis()
  const uauthMoralisConnector = new UAuthMoralisConnector()
  const [udUser, setudUser] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [currentPost, setCurrentPost] = useState(null)

  useEffect(() => {
    const getUdNameLocal = localStorage.getItem('udName')
    setudUser(getUdNameLocal)
  }, [udUser])

  const unstoppableLogin = new UAuth({
    clientID: '0ad2b4fa-bb81-44d4-a1b4-03e3f9a9623a',
    redirectUri: 'http://localhost:3000',
    scope: 'openid wallet',
  })

  const userLogIn = async () => {
    try {
      const userUnstopple = await unstoppableLogin.loginWithPopup()

      let user = await authenticate(uauth)
      let domainDetials = uauthMoralisConnector.uauth.user()
      const udName = (await domainDetials).sub
      console.log('is This  udName', udName)
      const wallet = (await domainDetials).wallet_address

      setWallet(wallet)
      setUserInfo(userUnstopple)

      if (udName) {
        localStorage.setItem('udName', udName)
      }

      setudUser(udName)
    } catch (error) {
      console.log(error)
    }
  }
  const userLogOut = () => {
    localStorage.removeItem('udName')
    setudUser('')
    logout()
  }

  return (
    <>
      <Navbar udUser={udUser} userLogOut={userLogOut} />
      {isAuthenticated ? (
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<LandingPage setCurrentPost={setCurrentPost} />}
            />
            <Route
              path="/store"
              element={<BeatsList setCurrentPost={setCurrentPost} />}
            />
            {/* <Route
              path="/store"
              element={<Home setCurrentPost={setCurrentPost} />}
            /> */}
            <Route path="/add-beat" element={<AddBeat />} />
            <Route
              path="/details"
              element={
                <PostDetails currentPost={currentPost} udUser={udUser} />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      ) : (
        <div className="loginPage">
          <h2> Log in to continue</h2>

          <Button
            onClick={userLogIn}
            variant="contained"
            style={{ backgroundColor: 'red' }}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
          <img
            src="https://duckduckgo.com/i/7f3d4ac9.png"
            height="200px"
            width="200px"
            className=""
            alt="Logo"
          />
        </div>
      )}
    </>
  )
}
export default App

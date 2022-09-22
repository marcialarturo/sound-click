import React from 'react'
import './Sidebar.css'
import { Icon } from 'web3uikit'
import { Link } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import { defaultImgs } from '../defaultimgs'
import logo from '../images/logo.png'


const Sidebar = ({ udUser }) => {
  const { Moralis } = useMoralis()
  const user = Moralis.User.current()

  return (
    <>
      <div className="siderContent">
        <div className="menu">
          <div className="details">
            <img src={logo} alt="company" className="logo" />
          </div>

          <Link to="/" className="link">
            <div className="menuItems">
              <Icon fill="#ffffff" size={33} svg="list" />
              Home
            </div>
          </Link>

          <Link to="/profile" className="link">
            <div className="menuItems">
              <Icon fill="#ffffff" size={33} svg="user" />
              My Timeline
            </div>
          </Link>

          <Link to="/settings" className="link">
            <div className="menuItems">
              <Icon fill="#ffffff" size={33} svg="cog" />
              Dashboard
            </div>
          </Link>
        </div>

        <div className="details">
          <img
            src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}
            className="profilePic"
            alt=""
          ></img>
          <div className="profile">
            <div className="who"> {udUser}</div>
            <div className="ud-user">
              {user.attributes.username.slice(0, 6)}
            </div>

            <div className="accWhen">
              {`${user.attributes.ethAddress.slice(
                0,
                4,
              )}...${user.attributes.ethAddress.slice(38)}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

import React from 'react'
import './Rightbar.css'
import { Input } from 'web3uikit'
import recent from '../images/recent.png'
import recent2 from '../images/recent2.png'

const Rightbar = ({ udUser }) => {
  return (
    <>
      <div className="rightbarContent">
        <br />
        <br />
        <br />
        <br />
        <br />
        <Input
          label="Search"
          name="Search"
          prefixIcon="search"
          labelBgColor="rgb(233 233 233 / 65%)"
        ></Input>
        <div className="trends">
          <h2>Recent media</h2>
          <img src={recent} className="recent-img" alt="Recent media" />
          <img src={recent2} className="recent-img" alt="Recent media" />
        </div>
      </div>
    </>
  )
}

export default Rightbar

import React from 'react'
import './LandingPage.css'
import browse from './browse.png'
import img from './1.png'
import { Landing } from '../landing-page/Landing'

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <img className="img-reponsive" src={img} alt="demo_img" />
      </div>
      <Landing />
      <br />
      <br />
      <br />
      <h2 class="_2SHVO">Browse Top Beats</h2>
      <img className="img-reponsive" src={browse} alt="demo_img" />
      <div align="center">
        <br />
        <br />
        <br />
        <img
          src="https://duckduckgo.com/i/7f3d4ac9.png"
          height="200px"
          width="200px"
          className=""
          alt="Logo"
        />
        <br />
        <br />
        <p className="description desc1">
          SoundClick was created for you; the writer, the performer, the beat
          maker, the producer, the engineer, the record label, the publisher,
          the videographer, the artist and the CREATOR. Beat Heat was built for
          the person telling their story with music and to find like-minded
          people to experience it with. Music is the universal language that
          connects us across the globe. Music brings out our human emotions and
          music is the unified voice of the people.
        </p>
      </div>
      <br />
    </div>
  )
}

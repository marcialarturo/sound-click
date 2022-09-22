import React from 'react'
import ProductHero from './modules/views/ProductHero'
import ProductValues from './modules/views/ProductValues'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  // title: {
  //   marginTop: theme.spacing(5),
  //   marginBottom: theme.spacing(5),
  // },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
})

/**
 * COMPONENT
 */

function About(props) {
  return (
    <div>
      <div>
        <h2 align="center">About Us</h2>
        <div align="center">
          <img
            src="https://duckduckgo.com/i/7f3d4ac9.png"
            height="200px"
            width="200px"
            className="logo"
            alt="Logo"
          />
          <p style={{ margin: '100px' }}>
            SoundClick was created for you; the writer, the performer, the
            beat maker, the producer, the engineer, the record label, the
            publisher, the videographer, the artist and the CREATOR. SoundClick
            was built for the person telling their story with music and to find
            like-minded people to experience it with. Music is the universal
            language that connects us across the globe. Music brings out our
            human emotions and music is the unified voice of the people.
          </p>

          <h2 align="center">Our Team</h2>

          <img
            height="300px"
            width="300px"
            style={{ margin: '20px' }}
            src="https://ca.slack-edge.com/T024FPYBQ-UV0NU1W10-61f181732755-512"
            alt="luis"
          />

          <img
            height="300px"
            width="300px"
            style={{ margin: '20px' }}
            src="https://ca.slack-edge.com/T024FPYBQ-U0101NSL2UW-8f556fd57c87-512"
            alt="hector"
          />

          <img
            height="300px"
            width="300px"
            style={{ margin: '20px' }}
            src="https://ca.slack-edge.com/T024FPYBQ-U0101NS6VM4-2f1ddee1c80c-512"
            alt="cesar"
          />
        </div>
      </div>
    </div>
  )
}

export default About

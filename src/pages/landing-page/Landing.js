import React from 'react'
import clsx from 'clsx'
import {
  Container,
  Button,
  Paper,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import img from './header.png'
import i01 from './i01.svg'
import join from './join.gif'
import start from './giphy-1.gif'
import i02 from './i02.gif'
import i03 from './i03.gif'
// import communityImg from './../../img/a.png'
// import metamakImg from './../../img/metamask.png'
// import exploreImg from './../../img/de-fi.jpeg'
// import learnImg from './../../img/learn.png'

import './LandingPage.css'
// import { HeroBanner } from './heroBanner/HeroBanner'
// import Reviews from './reviews/Reviews'

export const Landing = () => {
  const tileData = [
    {
      title: 'Oasis Network',
      img:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
    },
    {
      title: 'Polygon',
      img:
        'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Super Fluid',
      img:
        'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80',
    },
    {
      title: 'Eth Foundation',
      img:
        'https://images.unsplash.com/photo-1593080358201-08e4ff5f93d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJsb2NrY2hhaW4lMjB0ZWNob25sb2d5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
  ]

  return (
    <div className="d">
      {/* <HeroBanner /> */}
      <Container maxWidth="lg">
        <div className="welcome-section">
          <h2 className="welcome">Welcome to SoundClick</h2>
          <p className="description">
            An Ecosystem built to support the use and the growth of Music
            projects by enabling participants to actively get involved in the
            network via theoretical and interactive educational content provided
            by the active communities of established Music projects.
          </p>
        </div>

        <div className="join-section">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className="paper">
                <img src={join} alt="" className="steps" />
                <h3>Join SoundClick </h3>
                <p>
                  SoundClick is dedicated space for your community to come
                  together, ask and answer questions, and have open-ended
                  conversations.
                </p>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className="paper">
                <img src={start} alt="" className="steps" />
                <h3>Get Started</h3>
                <p>
                  Start exploring Music through our blockchain applications in
                  seconds. Trusted by over 1 million users worldwide.
                </p>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className="paper">
                <img src={i02} alt="" className="steps" />
                <h3>Get Involved</h3>
                <p>
                  SoundClick allow user to sale, buy, exchange beats within our
                  platform. Get involve today and discover our marketplace.
                </p>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper className="paper">
                <img src={i03} alt="" className="steps" />
                <h3>Contribute</h3>
                <p>
                  It's a program that supports people who create music, beats,
                  mixes and more. Creators receive tokens and get to showcase
                  their music.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

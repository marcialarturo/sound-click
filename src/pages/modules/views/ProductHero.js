import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '../components/Button'
import Typography from '../components/Typography'
import ProductHeroLayout from './ProductHeroLayout'

const backgroundImage =
  'https://cdn.mos.cms.futurecdn.net/f9af04b27a3e3669a45b95929c3e7631-1200-80.jpg'

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
})

function ProductHero(props) {
  const {classes} = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{display: 'none'}}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade Your Sound
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy BEAT HEAT STORE offers up to -50% off the most popular BEATS every
        Sunday.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductHero)

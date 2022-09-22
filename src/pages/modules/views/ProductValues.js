import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../components/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  }
})

function ProductValues(props) {
  const {classes} = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://ca.slack-edge.com/T024FPYBQ-UV0NU1W10-61f181732755-512"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                What Luis Says:
              </Typography>
              <Typography variant="h5">
                'I always find the hottest beats on this site. The name is
                fitting!'
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://ca.slack-edge.com/T024FPYBQ-U0101NSL2UW-8f556fd57c87-512"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                What Hector Says:
              </Typography>
              <Typography variant="h5">
                'Just finished my album thanks to Beat Heat, going to buy a
                yacht now!'
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="https://ca.slack-edge.com/T024FPYBQ-U0101NS6VM4-2f1ddee1c80c-512"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                What Cesar Says:
              </Typography>
              <Typography variant="h5">
                'Thanks to Beat Heat, I can finally make that song about vegan
                food I started writing when I was born. No Lie!'
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductValues)

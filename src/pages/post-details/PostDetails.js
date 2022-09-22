import { Link } from 'react-router-dom'
import { TextArea, Icon } from 'web3uikit'
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { StylesProvider } from '@material-ui/core/styles'
import guestImg from '../../images/avatar.png'
import { defaultImgs } from '../../defaultimgs'
import './PostDetails.css'
import {
  useMoralis,
  useWeb3ExecuteFunction,
} from 'react-moralis'

function PostDetails({ account, contractData, currentPost, udUser }) {
  const { Moralis } = useMoralis()
  const [tweet, setTweet] = useState()

  const updateComment = async () => {
    const postId = currentPost.id
    // connects to db
    const current = Moralis.Object.extend('Posts')
    // creates a reference to element
    let query = new Moralis.Query(current)
    // gets correct post by postId
    query = query.equalTo('objectId', postId)
    //  it gets the element obj
    const t = await query.first()
    // gets the field to update & change it
    const arr = currentPost.attributes.comments
    arr.unshift(tweet)
    t.set('comments', arr)
    setTweet('')
    // t.set('walletAddress', udUser ? udUser : 'Guest User')
    t.save()
  }


  return (
    <StylesProvider injectFirst>
      <Container className="root-pet-details">
        <div className="comments-container">
          {currentPost ? (
            <Grid container spacing={3}>
              <Card sx={{ width: `calc(100% + '24px')` }}>
                <p
                  style={{
                    paddingRight: '1rem',
                    paddingTop: '4rem',
                    fontWeight: 'bold',
                    textAlign: 'end',
                  }}
                >
                  Post / Details
                </p>
                <div className="feedTweet2">
                  <img
                    src={
                      currentPost.attributes.tweeterPfp
                        ? currentPost.attributes.tweeterPfp
                        : defaultImgs[0]
                    }
                    className="profilePic"
                    alt="img-tweet"
                  ></img>
                  <div className="completeTweet">
                    <div className="who">
                      {currentPost.attributes.tweeterUserName.slice(0, 6)}
                      <div className="accWhen">
                        {`${currentPost.attributes.tweeterAcc.slice(
                          0,
                          4,
                        )}...${currentPost.attributes.tweeterAcc.slice(38)} ·
                        ${currentPost.attributes.createdAt.toLocaleString(
                          'en-us',
                          {
                            month: 'short',
                          },
                        )}
                        ${currentPost.attributes.createdAt.toLocaleString(
                          'en-us',
                          {
                            day: 'numeric',
                          },
                        )}
                        `}
                      </div>
                    </div>
                    <div className="tweetContent">
                      {currentPost.attributes.tweetTxt}
                      {currentPost.attributes.tweetImg && (
                        <img
                          src={currentPost.attributes.tweetImg}
                          className="tweetImg"
                          alt="ig"
                        ></img>
                      )}
                    </div>
                    <div className="interactions">
                      <div className="interactionNums">
                        <Icon fill="#3f3f3f" size={20} svg="messageCircle" />
                      </div>
                      <div className="interactionNums">
                        <Icon fill="#3f3f3f" size={20} svg="star" />
                        12
                      </div>
                      <div className="interactionNums">
                        <Icon fill="#3f3f3f" size={20} svg="matic" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="comments">
                <Card sx={{ minWidth: 245 }}>
                  <div className="mainContent">
                    <div className="profileTweet">
                      <img
                        src={guestImg}
                        className="profilePic"
                        alt="img"
                      ></img>
                      <div className="tweetBox">
                        <TextArea
                          label=""
                          name="tweetTxtArea"
                          value={tweet}
                          type="text"
                          id="input-tweet"
                          onChange={(e) => setTweet(e.target.value)}
                          width="95%"
                        ></TextArea>
                        <div className="imgOrTweet">
                          <div className="tweetOptions">
                            <div className="tweet" onClick={updateComment}>
                              Save
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="comments">
                {currentPost.attributes.comments ? (
                  currentPost.attributes.comments.map((p, ind) => {
                    return (
                      <div className="">
                        <Card sx={{ width: '245px' }} key={ind}>
                          <div className="feedTweet2">
                            <img
                              src={guestImg}
                              className="profilePic"
                              alt="img-tweet"
                            ></img>
                            <div className="completeTweet">
                              <div className="who">
                                Guest user
                                <div className="accWhen">
                                  {currentPost.attributes.createdAt.toLocaleString(
                                    'en-us',
                                    {
                                      month: 'short',
                                    },
                                  )}
                                  {currentPost.attributes.createdAt.toLocaleString(
                                    'en-us',
                                    {
                                      day: 'numeric',
                                    },
                                  )}
                                </div>
                              </div>
                              <div className="tweetContent">{p}</div>
                            </div>
                          </div>
                        </Card>
                        <br />
                      </div>
                    )
                  })
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </Grid>
          ) : (
            <Button className="go-home-btn" component={Link} to="/">
              Go Home
            </Button>
          )}
        </div>
      </Container>
    </StylesProvider>
  )
}

export default PostDetails

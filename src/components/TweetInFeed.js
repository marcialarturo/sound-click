import React from 'react'
import './TweetInFeed.css'
import { defaultImgs } from '../defaultimgs'
import { Icon } from 'web3uikit'
import { useMoralis, useNewMoralisObject, useMoralisQuery } from 'react-moralis'
import { useEffect, useState } from 'react'
import { Card } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'

const TweetInFeed = ({ profile, setCurrentPost }) => {
  const navigate = useNavigate()
  const [tweetArr, setTweetArr] = useState()
  const [loading, setLoading] = useState(false)
  const { Moralis, account } = useMoralis()
  const postObject = useNewMoralisObject('Post')
  const commentObject = useNewMoralisObject('Comment')

  useEffect(() => {
    async function getTweets() {
      setLoading(true)
      try {
        const Tweets = Moralis.Object.extend('Posts')
        const query = new Moralis.Query(Tweets)
        if (profile) {
          query.equalTo('tweeterAcc', account)
        }
        const results = await query.find()
        console.log('🚀results', results)

        setTweetArr(results)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getTweets()
  }, [profile])

  const getComments = async (post) => {
    console.log('everything', post)
    const results = await fetch()
    console.log('🚀results', results)
    // alert('Successfully retrieved ' + results.length + ' monsters.')

    // const basicQuery = async () => {
    //   const results = await fetch()
    //   alert('Successfully retrieved ' + results.length + ' monsters.')
    // Do something with the returned Moralis.Object values
    // for (let i = 0; i < results.length; i++) {
    //   const object = results[i]
    //   alert(object.id + ' - ' + object.get('ownerName'))
    // }
    // }

    // Assume Moralis.Object myPost was previously created.
    // const query = new Moralis.Query('Comment')
    // query.equalTo('Post', post)
    // const comments = await query.find()
    // console.log('🚀$$$$getComments ~ comments', comments)
  }

  /*

   i need to create a func to make a comment
   use Moralis function
   use the post.id, the content & wAddress

  */
  const makeComment = async (post) => {
    console.log('everything', post)
    const postId = post.id
    const attributes = post.attributes
    console.log('attributes###', attributes)

    // const postData = {
    //   title: '333',
    //   content: 'ARE YOU WORKING 333',
    //   belongsTo: ,
    // }
    attributes.belongsTo = 'q6id19lqMwPHnFLSmzbaAcjt'
    console.log('attributes 22', attributes)

    // const commentData = {
    //   content: 'SOCCER1',
    //   parent: await postObject.save(post),
    // }

    // commentObject.save(commentData, {
    //   onSuccess: (comment) => console.log(comment),
    //   onError: (error) => console.log(error),
    // })
  }

  const makePost = async () => {
    const postData = {
      title: '444',
      content: 'ARE YOU WORKING 333',
      arrComments: ['Good', 'Morning'],
    }

    const commentData = {
      content: '444 comment.',
      parent: await postObject.save(postData),
    }

    commentObject.save(commentData, {
      onSuccess: (comment) => console.log(comment),
      onError: (error) => console.log(error),
    })
  }

  const createComment = async (post) => {
    // const postId = post.id
    // navigate(`/details/${postId}`)

    console.log('🚀post', post)

    const commentData = {
      content: '123 I would love to get it.',
      walletAddress: '123454566',
      parent: await post.save(),
    }

    commentObject.save(commentData, {
      onSuccess: (comment) => console.log(comment),
      onError: (error) => console.log(error),
    })
  }
  const { fetch } = useMoralisQuery(
    'Post',
    (query) => query.equalTo('objectId', 'hu4BHFuCFszaiQEPhcHAcOye'),
    [],
    { autoFetch: false },
  )

  const updateComment = async (post) => {
    const postId = post.id
    const newComment = '10'
    // connects to db
    const current = Moralis.Object.extend('Posts')
    // creates a reference to element
    const query = new Moralis.Query(current)

    //  it gets the element obj
    const t = await query.first()

    // gets the field to update & change it
    const arr = post.attributes.comments
    arr.push(newComment)
    t.set('comments', arr)
    t.save()
  }

  const goToPostDetails = (post) => {
    setCurrentPost(post)
    const postId = post.id
    navigate(`/details`)
  }

  return (
    <>
      {tweetArr
        ?.map((e, idx) => {
          return (
            <div className="tweet-feed-container" key={idx}>
              <Card sx={{ minWidth: 245 }} onClick={() => goToPostDetails(e)}>
                <div className="feedTweet">
                  <img
                    src={
                      e.attributes.tweeterPfp
                        ? e.attributes.tweeterPfp
                        : defaultImgs[0]
                    }
                    className="profilePic"
                    alt="img-tweet"
                  ></img>
                  <div className="completeTweet">
                    <div className="who">
                      {e.attributes.tweeterUserName.slice(0, 6)}
                      <div className="accWhen">
                        {`${e.attributes.tweeterAcc.slice(
                          0,
                          4,
                        )}...${e.attributes.tweeterAcc.slice(38)} ·
                        ${e.attributes.createdAt.toLocaleString('en-us', {
                          month: 'short',
                        })}
                        ${e.attributes.createdAt.toLocaleString('en-us', {
                          day: 'numeric',
                        })}
                        `}
                      </div>
                    </div>
                    <div className="tweetContent">
                      {e.attributes.tweetTxt}
                      {e.attributes.tweetImg && (
                        <img
                          src={e.attributes.tweetImg}
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
            </div>
          )
        })
        .reverse()}
    </>
  )
}

export default TweetInFeed

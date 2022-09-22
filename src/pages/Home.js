import React from 'react'
import './Home.css'
import { defaultImgs } from '../defaultimgs'
import { TextArea, Icon } from 'web3uikit'
import { useState, useRef } from 'react'
import TweetInFeed from '../components/TweetInFeed'
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis'
import { fstore } from '../firebase'
import { collection, doc, updateDoc, getDocs, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const Home = ({ setCurrentPost }) => {
  const { Moralis } = useMoralis()
  const user = Moralis.User.current()
  const contractProcessor = useWeb3ExecuteFunction()
  const inputFile = useRef(null)
  const [selectedFile, setSelectedFile] = useState()
  const [theFile, setTheFile] = useState()
  const [tweet, setTweet] = useState()

  // FIREBASE
  const postCollection = collection(fstore, 'comments')

  async function maticTweet() {
    if (!tweet) return
    let img
    if (theFile) {
      const data = theFile
      const file = new Moralis.File(data.name, data)
      await file.saveIPFS()
      img = file.ipfs()
    } else {
      img = 'No Img'
    }

    let options = {
      contractAddress: '0x8E452D8573e2B1e8341D3f4aCC07939247cf99c6',
      functionName: 'addTweet',
      abi: [
        {
          inputs: [
            {
              internalType: 'string',
              name: 'tweetTxt',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'tweetImg',
              type: 'string',
            },
          ],
          name: 'addTweet',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ],
      params: {
        tweetTxt: tweet,
        tweetImg: img,
      },
      msgValue: Moralis.Units.ETH(1),
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        saveTweet()
      },
      onError: (error) => {
        console.log(error.data.message)
      },
    })
  }

  async function saveTweet() {
    if (!tweet) return

    const Tweets = Moralis.Object.extend('Tweets')

    const newTweet = new Tweets()

    newTweet.set('tweetTxt', tweet)
    newTweet.set('tweeterPfp', user.attributes.pfp)
    newTweet.set('tweeterAcc', user.attributes.ethAddress)
    newTweet.set('tweeterUserName', user.attributes.username)

    if (theFile) {
      const data = theFile
      const file = new Moralis.File(data.name, data)
      await file.saveIPFS()
      newTweet.set('tweetImg', file.ipfs())
    }

    await newTweet.save()
    window.location.reload()
  }

  const onImageClick = () => {
    inputFile.current.click()
  }

  const changeHandler = (event) => {
    const img = event.target.files[0]
    setTheFile(img)
    setSelectedFile(URL.createObjectURL(img))
  }

  const test = async (e) => {
    e.preventDefault()
    console.log('🚀e', e)
    const res = await getDocs(postCollection)
    console.log('🚀res', res)

    let comments = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log('🚀comments', comments)
  }

  return (
    <>
      <div className="pageIdentify">Home</div>
      <div className="mainContent">
        <TweetInFeed profile={false} setCurrentPost={setCurrentPost} />
      </div>
    </>
  )
}

export default Home

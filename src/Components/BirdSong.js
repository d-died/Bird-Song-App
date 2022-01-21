import React, { useState } from 'react'
// import { Button } from 'react-router-dom'
import data from './test.json'

const BirdSong = () => {

    const [ birdData, setBirdData ] = useState(data)
    const sono = (birdData.sono.full.split('ffts')[0])

    const fileName = birdData['file-name'].split(" ").join("%20")
    console.log(fileName)
  
    const soundFileURL = `https://${sono}${fileName}`
  
    const call = new Audio(soundFileURL)
    const playCall = () => {
        call.play()
    }

    const pauseCall = () =>{
        call.pause()

    }

    const stopCall = () => {
        call.pause()
        call.currentTime = 0
    }
    // const birdData = {
    //     sono:'https:////xeno-canto.org/sounds/uploaded/TGBFXDVERJ/ffts/XC510934-',
    //     download:'download',
    //     api: 'https://www.xeno-canto.org/api/2/recordings?query=',
    //     endpoint: 'cnt:brazil'
    // }
    
    // const url = `${birdData.api}${birdData.endpoint}`
    // console.log(url)
    // const [ song, setSong ] = useState
    
    // fetch(url)
    // .then(res => res.json())
    // .then(res => {
    //     setSong(res.data)
    // })
    // .catch(console.error)
    // console.log

    return(
        <div>
            <h3> Bird Sound </h3>
            <button value='play' onClick={ playCall }></button>
            <button value='pause' onClick={ pauseCall }></button>
            <button value='stop' onClick={ stopCall }></button>
        </div>
    )

}

export default BirdSong




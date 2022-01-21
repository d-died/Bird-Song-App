import React, { useState } from 'react'
// import { Button } from 'react-router-dom'
import data from './test.json'

const BirdSong = () => {

    const [ birdData, setBirdData ] = useState(data)
    const sono = (birdData.sono.full.split('ffts')[0])

    const fileName = birdData['file-name'].split(" ").join("%20")
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




import React from 'react'
// import { Button } from 'react-router-dom'

const BirdSong = () => {

    const call = new Audio('https://xeno-canto.org/sounds/uploaded/TGBFXDVERJ/XC510934-Rhea%20americana_espinilho_1241.mp3')

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




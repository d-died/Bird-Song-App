import React from "react";
import { Link } from 'react-router-dom'

const BirdCard = () => {
    //Each card will be a container
    //Each card will have the country listed on it.
    //When you click on a card, it will pass down props:
    //(handleClick, soundfile URL, any other bird data to display) to BirdSong.js
 

    return(
        <div>
            <Link to='/bird'>
                <div className='card'>
                    <h2>Brazil</h2>
                </div>
            </Link>
        </div>
    )

}


export default BirdCard
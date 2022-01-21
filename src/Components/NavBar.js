import React from "react";
import App from '../App'
import { Link } from 'react-router-dom'

const NavBar = () => {

    //there is just 1 button (title) that when you click, it takes you back to home
    //this is going to be in state

    return(
        <nav>
            <h2>Birdy</h2>
            <Link to='/'> 
                Home 
            </Link>
        </nav>
    )
}

export default NavBar

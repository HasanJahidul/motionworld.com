import React from 'react'
import Player from 'react-player'
import Navbar from '../layout/navbar'
import "./Home.css"
const Home = () => {
    return (
        <>
        <Navbar/>
        <div id="intro">
            
            <div className= "player-wrapper"> 
                <Player className="react-player " url="https://www.youtube.com/watch?v=9v5-9ovoTGE" playing={true} controls={false} loop={true} muted={true}width='80%'
          height='80%'/> 
            </div>
            <button className="btn-gradient-border">GET YOURS</button>
            
        </div>
            
        </>
    )
}

export default Home

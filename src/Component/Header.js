import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
               <div className="header">
                   <h1 className="header-text">Meme Generator</h1>
                   <img className="img" src= "https://www.denofgeek.com/wp-content/uploads/2019/06/spongebob-squarepants-patrick-nickelodeon.jpg?fit=670%2C377" alt= '' />     
               </div> 
            </div>
        )
    }
}

export default Header

import React from 'react'
import home from '../../imgs/home2.jpeg'
import './home.css'

function Home() {
  return (
//     <div className="container">
//       <div className="image-section">
//     <img className="hero-img" src={home} alt="Home" />
//       </div>
//      <div className="text-section">
//         <h1 className="headline">MAKING LIFE BETTER.</h1>
//         <a href="/Walls" className="cta-btn">Get Started</a>
//      </div>
// </div>

    <div className="container">
    <div className="image-section">
      <img className="hero-img" src={home} alt="Home" />
      <div className="image-label">Home is where the heart is</div> 
    </div>
    <div className="text-section">
      <span className="headline">MAKING LIFE BETTER.</span> <br/><br/>
      <a href="/Walls" className="ctaa-btn">Get Started</a>
    </div>
    </div>


  )
}

export default Home
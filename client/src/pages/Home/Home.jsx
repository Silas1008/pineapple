import React from 'react'
import './Home.css';
import Landing from '../HeroContent/Landing/Landing';
import SectionTwo from '../HeroContent/SectionTwo/SectionTwo';
import SectionThree from '../HeroContent/SectionThree/SectionThree';
import TypeFour from '../HeroContent/TypeFour/TypeFour';
const Home = () => {

  return (
    <div className="home">
    
    <div className='landing'>
    <Landing/>
    </div>
  
    <div className='section-one'>
    <SectionTwo/>
    </div>

    <div className='section-two'>
    <SectionThree/>
    </div>

    <div className='section-five'>
    <TypeFour/>
    </div>
    

    </div>
  )
}

export default Home;
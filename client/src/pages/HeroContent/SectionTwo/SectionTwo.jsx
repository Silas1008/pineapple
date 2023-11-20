import React from 'react'
import './SectionTwo.css';

const Sectiontwo = () => {
  return (
    <div className='SectionTwo'>
    <div className='card-text'>
    3D Card hover
    </div>
    
    <div className='section-two'>
    
      <div className="dark-rider">
        <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
              </div>
              <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
              <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
            </div>
          </a>
      </div>

     <div className="force-mage">
        <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="cover-image" />
              </div>
              <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className="title" />
              <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className="character" />
            </div>
          </a>
     </div>
        </div>

    </div>
  )
}

export default Sectiontwo
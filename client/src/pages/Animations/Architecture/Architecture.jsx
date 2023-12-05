import React from 'react';
import './Architecture.scss'

const Architecture = () => {
  return (
    <div className='architecture'>
        <h2>Collecting CSS Architecture Methodologies</h2>
        <ul>
            <li className='method'><a href="https://github.com/stubbornella/oocss/wiki" target='/blank'>OOCSS</a> Object Orientated CSS</li>
            <li className='method'><a href="https://smacss.com/" target='/blank'>SMACSS</a> Scalable Modular Architecture for CSS</li>
            <li className='method'><a href="http://getbem.com/" target='/blank'>BEM</a> Block, Element, Modifier (Naming convention)</li>
            <li className='method'><a href="http://patternlab.io/about.html" target='/blank'>Atomic Design</a>/<a href="http://atomicdesign.bradfrost.com/table-of-contents/" target='/blank'>Atomic Design (the book)</a></li>
            <li className='method'><a href="http://ecss.io/" target='/blank'>ECSS</a> Enduring CSS</li>
            <li className='method'><a href="https://mlarcher.github.io/docssa/" target='/blank'>docssa</a> Deferred Object CSS Architecture</li>
            <li className='method'><a href="http://itcss.io/" target='/blank'>ITCSS</a> Inverted Triangle CSS</li>
        </ul>    
    </div>
  )
}

export default Architecture

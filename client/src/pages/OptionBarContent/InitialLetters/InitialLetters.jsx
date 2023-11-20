import React from 'react';
import './InitialLetters.css';

const InitialLetters = () => {
  return (
    <div className="initial-letters">
      <div className="initial">
        <h5 className="initial-h5">Similique magnam alias recusandae veniam, quisquam magni, itaque quaerat dolor? Veniam animi exercitationem at quasi molestiae! Doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam omnis repellendus, atque similique magnam alias.</h5>
      </div>

     <div className="initial pseudo">
        <div className="initial-news">
        <div className="news">
        <h1 className="initial-title">The First letter pseudo element</h1>
        
        <p className="first-paragraph">
            The ::first-letter pseudo-element is used to add a special style to the first letter of a text if it is not preceded by any other content (such as images or inline tables) on its line. This is a very common styling used by blog authors. It can only be
            applied to block-level elements.
        </p>
        <p>
            Suppose you want to style the first letter of an article so it has a different color and size from other letters, this would be easier done with the ::first-letter pseudo-element than making use of JavaScript to get the first first letter of a particular
            element.
        </p>
        </div>
        </div>
     </div>
    </div>
  );
};

export default InitialLetters;

import './Button.css';
import React, { useState } from 'react';

function StatefulFunctionButton(props) {
// this is a functional component, you'll see this pattern with the hook 
  const [quoteIdx, setQuoteIndex] = useState(0)
  //useState hook... react way of handing state
// this function incrememts index and makes that the quote... 
// usestate is a function where we start off with a default state
  function whenButtomPressed() {
    if (quoteIdx === props.quotes.length - 1) {
      setQuoteIndex(0)
    } else {
      setQuoteIndex(quoteIdx + 1)
    }
  }

  return (
    <>
      <button 
        className="duneButton"
        onClick={whenButtomPressed}
        >{props.buttonText}
      </button>
      <p>Quote: "{props.quotes[quoteIdx]}" - Some dude</p>
    </>
  );
}


export default StatefulFunctionButton;

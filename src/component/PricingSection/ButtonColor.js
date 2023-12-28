// import { useState } from "react";

// function ButtonColor() {
//   const backgroundColors = ["bg-warning","bg-white"]  
//   const [selected, setSelected] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState();
  
//   const handleClick = (e) => {
//     e.target.i
//     document.querySelector(`#one`).className=`btn ${backgroundColors[0]}`;
//     document.querySelector(`#two`).className=`btn ${backgroundColors[1]}`;

//   }
//   return (
//     <div className="container d-flex gap-3 mt-4">
//       <button id="one" className={`settings btn btn-success`} onClick={handleClick}>hello</button>
//       <button id="two" className="btn bg-secondary" selected={selected} onClick={handleClick}>hello</button>
//     </div>
//   );
// }

// export default ButtonColor;

import React, { useState } from 'react';

const ButtonColor = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="container d-flex gap-3 mt-4">
      <button
        id="one"
        className={`settings btn ${activeButton === 'one' ? 'btn-warning' : 'btn-white'}`}
        onClick={() => handleButtonClick('one')}
      >
        Hello
      </button>
      <button
        id="two"
        className={`btn ${activeButton === 'two' ? 'btn-warning' : 'bg-white'}`}
        onClick={() => handleButtonClick('two')}
      >
        Hello
      </button>
    </div>
  );
};

export default ButtonColor;

import React, { useState } from "react";

import { colorsData } from "../../api/data";

const Colors = (props) => {
  const [showColorDetails, setShowColorDetails] = useState(false);
  const [colorClicked, setColorClicked] = useState();
  const colorsList = () => (
    <div>
      <h1 className="">Colors Result</h1>
      <h2 className="">{props.colorsResult}</h2>
      <p className="">What does this result mean?</p>
      <ul className="">
        {Object.keys(colorsData).map((color) => (
          <li className="" onClick={() => handleItemClick(color)}>
            {color}
            <div className="">{"-->"}</div>
          </li>
        ))}
      </ul>
      <div onClick={props.onNextClick}>Next {">>"}</div>
    </div>
  );

  const handleItemClick = (color) => {
    setColorClicked(color);
    setShowColorDetails(true);
  };
  const colorDetails = () => (
    <div>
      <div onClick={() => setShowColorDetails(false)}>X</div>
      <div>{colorsData[colorClicked]["title"]}</div>
      <div>{colorsData[colorClicked]["content"]}</div>
    </div>
  );
  return <div>{showColorDetails ? colorDetails() : colorsList()}</div>;
};

export default Colors;

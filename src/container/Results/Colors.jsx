import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";

import { colorsData } from "../../api/data";

const Colors = (props) => {
  const [showColorDetails, setShowColorDetails] = useState(false);
  const [colorClicked, setColorClicked] = useState();
  const colorsList = () => (
    <div className="app__color-content">
      <h1 className="heading">Color Result</h1>
      <h2 className="color">
        <span>{props.colorsResult}</span>
      </h2>
      <p className="p-text">What does the colors mean?</p>
      <ul className="colors-list">
        {Object.keys(colorsData).map((color) => (
          <li className="" onClick={() => handleItemClick(color)}>
            <HiArrowSmRight />
            {color}
          </li>
        ))}
      </ul>
      <div className="btn" onClick={props.onNextClick}>
        <span>Next</span>
      </div>
    </div>
  );

  const handleItemClick = (color) => {
    setColorClicked(color);
    setShowColorDetails(true);
  };
  const colorDetails = () => (
    <div className="app__color-details">
      <div onClick={() => setShowColorDetails(false)}>
        <MdOutlineCancel />
      </div>
      <div className="title">{colorsData[colorClicked]["title"]}</div>
      <div className="content">{colorsData[colorClicked]["content"]}</div>
    </div>
  );
  return (
    <div className="app__color">
      {showColorDetails ? colorDetails() : colorsList()}
    </div>
  );
};

export default Colors;

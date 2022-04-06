import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

import { briggsData } from "../../api/data";

const Briggs = (props) => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [itemClicked, setItemClicked] = useState();
  const itemsList = () => (
    <div className="app__briggs-content">
      <h1 className="heading">Briggs Result</h1>
      <h2 className="briggs">
        <span>{props.briggsResult}</span>
      </h2>
      <p className="p-text">What does this mean?</p>
      <ul className="">
        {Object.keys(briggsData).map((item) => (
          <li className="" onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const handleItemClick = (item) => {
    setItemClicked(item);
    setShowItemDetails(true);
  };
  const itemDetails = () => (
    <div className="app__briggs-details">
      <div className="" onClick={() => setShowItemDetails(false)}>
        <MdOutlineCancel />
      </div>
      <div className="title">{briggsData[itemClicked]["title"]}</div>
      <div className="content">{briggsData[itemClicked]["content"]}</div>
    </div>
  );
  return (
    <div className="app__briggs">
      {showItemDetails ? itemDetails() : itemsList()}
    </div>
  );
};

export default Briggs;

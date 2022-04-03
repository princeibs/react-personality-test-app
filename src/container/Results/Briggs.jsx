import React, { useState } from "react";

import { briggsData } from "../../api/data";

const Briggs = (props) => {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [itemClicked, setItemClicked] = useState();
  const itemsList = () => (
    <div>
      <h1 className="">Briggs Result</h1>
      <h2 className="">{props.briggsResult}</h2>
      <p className="">What does this result mean?</p>
      <ul className="">
        {Object.keys(briggsData).map((item) => (
          <li className="" onClick={() => handleItemClick(item)}>
            {item}
            <div className="">{"-->"}</div>
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
    <div>
      <div onClick={() => setShowItemDetails(false)}>X</div>
      <div>{briggsData[itemClicked]["title"]}</div>
      <div>{briggsData[itemClicked]["content"]}</div>
    </div>
  );
  return <div>{showItemDetails ? itemDetails() : itemsList()}</div>;
};

export default Briggs;

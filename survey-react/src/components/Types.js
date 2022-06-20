import React, {useState, useEffect} from "react";

const Types = ({text, types, setSelected }) => {
  

  return (
    <select className="type" id="types" onChange={(e) => setSelected(e.target.value)}>
      {types.map((type) => (
        <option key={type.id}> {type.type}</option>
      ))}
    </select>
  );
};

export default Types;
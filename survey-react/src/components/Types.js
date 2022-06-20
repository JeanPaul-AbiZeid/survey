import React, {useState, useEffect} from "react";

const Types = ({text, types, setSelected, onChange }) => {
  

  return (
    <select className="type" id="types" onChange={(e) => {
      onChange(e.target.value)
      setSelected(e.target.value)}}>
      {types.map((type) => (
        <option key={type.id}> {type.type}</option>
      ))}
    </select>
  );
};

export default Types;
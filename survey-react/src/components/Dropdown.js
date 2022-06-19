import React, { useEffect } from "react";
import "../App.css";

const Dropdown = ({ options, id, values, setValues}) => {
  useEffect(() => {
    setValues((values) =>({...values, [id]:null}))
  },[])
  
  const array = options.map((option, index) => (
    
    <option key={index} value={option.option}>{option.option}</option>

  ));
  return(
    <select onChange={(e) => setValues((values) =>({...values, [id]:e.target.value}))}>
      <option>---</option>
      {array}
    </select>
  );
};

export default Dropdown;

import React, { useEffect } from "react";
import '../App.css';

const Radio = ({options, id, values, setValues}) => {
    
    const array = options.map((option, index) => {
        return <div key={index}>
            <input type="radio" name="radio_button" value={option.option} onChange={(e) => setValues((values) =>({...values, [id]:e.target.value}))}/>
            <label>{option.option}</label>
        </div>
    })
  return (
    <div>{array}</div>
  );
};

export default Radio;
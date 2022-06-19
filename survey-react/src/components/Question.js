import React from "react";
import '../App.css';

const Question = ({id, text, type, options }) => {
    // console.log(options[2])
    {options.map((option) => (
        console.log(option.option)
      ))}
  return (
    <div id={id} className="question">
        
        3
        <h3>{text}</h3>
        <input type={type}/>
        
        
    </div>
  );
};

export default Question;
import React from "react";
import '../App.css';

const Question = ({id, text }) => {
  return (
    <div id={id} className="question">
        <h3>{text}</h3>
    </div>
  );
};

export default Question;
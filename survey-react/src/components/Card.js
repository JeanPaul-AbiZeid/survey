import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({text, onClick }) => {
    const Navigation = useNavigate();
  return (
    <div className="survey-container" onClick={Navigation("/")}>
        <h3>{text}</h3>
    </div>
  );
};

export default Card;



import React from "react";

const Card = ({text, onClick, className, route}) => {
  
  return (
    <div className={className} onClick={onClick}>
        <h3>{text}</h3>
    </div>
  );
};

export default Card;



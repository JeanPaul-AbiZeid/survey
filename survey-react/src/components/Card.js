import React from "react";

const Card = ({text, onClick }) => {
    const Navigation = useNavigate();
  return (
    <div className="survey-container" onClick={Navigation("/Survey")}>
        <h3>{text}</h3>
    </div>
  );
};

export default Card;



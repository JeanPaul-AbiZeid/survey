import React from "react";

const CreateChoice = ({currentQuestion, setCurrentQuestion}) => {
  return (
    <div>
        <input className="choice" placeholder="Choice" type="text" onChange={(e) => setCurrentQuestion((current) => ({...current, choices: [{...current.choices}, e.target.value] })) }/>
    </div>
  );
};

export default CreateChoice;
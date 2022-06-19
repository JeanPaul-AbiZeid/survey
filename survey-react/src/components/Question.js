import React, { useEffect } from "react";
import '../App.css';
import Dropdown from "./Dropdown";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

const Question = ({id, text, type, options, values, setValues }) => {
    const question_type = () => {
        switch(type){
            case "radio":
                return <Radio id={id} values={values} setValues={setValues} options={options}/>
            case "dropdown":
                return <Dropdown id={id} values={values} setValues={setValues} options={options}/>
            case "text":
                return <Input id={id} values={values} setValues={setValues} type= {type}/>
            case "number":
                return <Input id={id} values={values} setValues={setValues} type= {type}/>
            case "checkbox":
                return <Checkbox id={id} values={values} setValues={setValues} type= {type}/>
            case "date":
                return <Input id={id} values={values} setValues={setValues} type= {type}/>
            
            default: return
            }
    }

  return (
    <div className="question">
        
        <h3>{text}</h3>
        {question_type()}
        
    </div>
  );
};

export default Question;
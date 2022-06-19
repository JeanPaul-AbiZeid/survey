import React, { useEffect } from "react";
import "../App.css";

const Input = ({ type, id, values, setValues}) => {
    useEffect(() => {
        setValues((values) =>({...values, [id]:null}))
        },[])
  return(
    <input type = {type} onChange={(e) => setValues((values) =>({...values, [id]: e.target.value}))} />
  );
};

export default Input;

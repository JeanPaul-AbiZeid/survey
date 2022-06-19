import React, { useEffect } from "react";
import "../App.css";

const Checkbox = ({ type, id, values, setValues}) => {
    useEffect(() => {
        setValues((values) =>({...values, [id]:false}))
        },[])
  return(
    <input type = {type} onChange={(e) => setValues((values) =>({...values, [id]: e.target.checked}))} />
  );
};

export default Checkbox;
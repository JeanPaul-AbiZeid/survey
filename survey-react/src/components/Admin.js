import React, { useEffect, useState } from "react";
import '../App.css';
import Button from "./Button";
import Types from "./Types";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
    
  const [types, setTypes] = useState([]);
  const [selected, setSelected] = useState(types[0]);
  // const [survey_name, setSurvey_name]= useState("");
  // const [survey_questions, setSurvey_questions]= useState([]);


  const fetchTypes = async () => {
      let jwt = localStorage.getItem("jwt")
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `token ${jwt}`);
      try {
          const res = await fetch("http://127.0.0.1:8000/api/gettypes", {headers: myHeaders});
          const data = await res.json();
          return data;
      } catch (err) {
          console.log(err);
      }
  };
  
  useEffect(() => {
  //Accepts a function to perform on certain changes
  const getTypes = async () => {
      const serverTypes = await fetchTypes();
      setTypes(serverTypes.types);
      setSelected(serverTypes.types[0].type)
  };
  getTypes();
  }, []);

  // // const handleClick = () => {
  // //   setSurvey_questions(survey_questions => (survey_questions.push({id})))
  // // }
    
  

    const Navigation = useNavigate();
    return (
      <div>
        <nav className="top-nav">
            <h1>S-Maker</h1>
            <ul className="links">
                <li>About Us</li>
                <li>Contact</li>
                <li>
                    <button className="btn-white" onClick={
                        function logout(){
                            localStorage.clear();
                            Navigation("/")
                        }
                    }>Log Out</button>
                </li>
            </ul>
        </nav>
        {/* <Types types={types} /> */}
        <Types types={types} setSelected={setSelected}/>
        <button>Add Question</button>
        
      </div>
    );
  };

export default Admin;
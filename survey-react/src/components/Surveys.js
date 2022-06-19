import React, {useState, useEffect} from "react";
import '../App.css';
import Button from "./Button";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";

const Surveys = () => {
    const Navigation = useNavigate();
    const [surveys, setSurveys] = useState([]);
    const [completed, setCompleted] = useState([]);

    const fetchCompleted = async () => {
        let jwt = localStorage.getItem("jwt")
        const myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `token ${jwt}`);
        try {
            const res = await fetch("http://127.0.0.1:8000/api/getcompleted", {headers: myHeaders});
            const result = await res.json();
            return result;
        } catch (err) {
            console.log(err);
        }
    };
    
    useEffect(() => {
    //Accepts a function to perform on certain changes
    const getCompleted = async () => {
        const Completed = await fetchCompleted();
        setCompleted(Completed.Completed_surveys);
    };
    getCompleted();

    const getSurveys = async () => {
        const serverSurveys = await fetchSurveys();
        setSurveys(serverSurveys.surveys);
    };
    getSurveys()
    }, []);
    
    
    const fetchSurveys = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/getsurveys");
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    
    // useEffect(() => {
    // //Accepts a function to perform on certain changes
    // const getSurveys = async () => {
    //     const serverSurveys = await fetchSurveys();
    //     setSurveys(serverSurveys.surveys);
    // };
    // getSurveys();
    // }, []);


    let complete_array = [];
    completed.map((complete) => (
        complete_array.push(complete.id)
    ));

    return (
      <div>
        <nav className="top-nav">
            <h1>S-Maker</h1>
            <ul className="links">
                <li onClick={() => Navigation("/Surveys")}>Home</li>
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
        <div className="main-container">
            <h1>Available Surveys</h1>
            {surveys.length === 0
                  ? "No Surveys Available"
                  : surveys.map((survey) => {
                    return !complete_array.includes(survey.id) && <Card
                        key = {survey.id}
                        text = {survey.name}
                        className = "survey-container"
                        onClick={() => {
                            localStorage.setItem("survey_id", survey.id);
                            localStorage.setItem("survey_name", survey.name);
                            Navigation("/Survey")
                        }}
                      />}
                    )}
            
            <h1>Completed Surveys</h1>
            {completed.length === 0
                  ? "No Surveys Completed yet"
                  : completed.map((complete) => (
                      <Card
                        key = {complete.id}
                        text = {complete.name}
                        className = "completed-survey"
                      />
                    ))}
        </div>
        
      </div>
    );
  };

export default Surveys;
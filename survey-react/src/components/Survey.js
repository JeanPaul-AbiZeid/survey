import React, {useState, useEffect} from "react";
import '../App.css';
import Button from "./Button";
import Question from "./Question";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Survey = () => {
    const {id} = useParams()
    const Navigation = useNavigate();
    const [survey, setSurvey] = useState({});
    const [values, setValues] = useState({})

    const url = "http://127.0.0.1:8000/api/getquestions/" + id;
    

    const fetchSurvey = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        //Accepts a function to perform on certain changes
        const getSurvey = async () => {
            const serverSurvey = await fetchSurvey();
            setSurvey(serverSurvey.survey);
        };
        getSurvey();
        }, []);

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
            <h1>{survey.name}</h1>
            <form>
                {survey.questions && survey.questions.map((info) => (
                    <Question values={values}
                    setValues = {setValues}
                    key = {info.id}
                    id = {info.id}
                    type = {info.type}
                    text = {info.question}
                    options = {info.options}
                    />
                ))}
                <button className="submit" type="submit" onClick={(e) => {
                        e.preventDefault();

                        Object.entries(values).map(([key, value]) => {

                            let data = new FormData();
  
                            data.append('user_id', localStorage.getItem("user_id"));
                            data.append('question_id', key);
                            data.append('answer', value);
                            axios({
                                method: 'post',
                                url: 'http://127.0.0.1:8000/api/addanswer',
                                data: data,
                            })
                            .then(function (response) {
                            
                            })
                            .catch(function (error){
                                console.log(error)
                        })})

                        let result = new FormData();
  
                        result.append('user_id', localStorage.getItem("user_id"));
                        result.append('survey_id', id);
                        
                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:8000/api/addcompleted',
                            data: result,
                        })
                        .then(function (response) {
                        
                        })
                        .catch(function (error){
                            console.log(error)
                         })

                         alert("Survey Submitted");
                         Navigation("/Surveys")


                }}>Submit</button>
            </form>
            
            
        </div>
        
        
      </div>
    );
  };

export default Survey;
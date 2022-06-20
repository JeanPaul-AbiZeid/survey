import React, {useState, useEffect} from "react";
import CreateChoice from "./CreateChoice";
import Types from "./Types";

const CreateQuest = (index, survey_questions, setSurvey_questions) => {
    const [types, setTypes] = useState([]);
    const [selected, setSelected] = useState(types[4]);
    const [question_choices, setQuestion_choices]= useState([]);

    function addChoices(){
        setQuestion_choices((question_choices) => ([...question_choices, [<CreateChoice/>]]))
    }

    const questionType = () => {
        switch(selected){
            case "radio":
            case "dropdown":
                return <div>
                    <button onClick={addChoices}>add choice</button>
                    {question_choices}
                </div>
            
            default: return
            }
    }

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
  

  return (
    <div>
        <Types types={types} setSelected={setSelected}/>
        {/* setSurvey_questions((survey_questions) =>([...survey_questions, e.target.value])) */}
        <input  placeholder="Add Question" type="text" onChange={(e) => console.log(e.target.value)} /><br/>
        {questionType()}
    </div>
    
  );
};

export default CreateQuest;
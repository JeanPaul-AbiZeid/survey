import React, {useState, useEffect} from "react";
import CreateChoice from "./CreateChoice";
import Types from "./Types";

const CreateQuest = (index, questions, setQuestions) => {
    const [types, setTypes] = useState([]);
    const [selected, setSelected] = useState(types[4]);
    const [question_choices, setQuestion_choices]= useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };

    function addChoices(){
        setQuestion_choices((question_choices) => ([...question_choices, [<CreateChoice currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>]]))
    }

    function Save(){
        setQuestions(prevQuestions => ([...prevQuestions, currentQuestion]))
    }

    const questionType = () => {
        switch(selected){
            case "radio":
            case "dropdown":
                return <div>
                    <button className="add add-choice" onClick={addChoices}>Add choice</button>
                    {question_choices}
                </div>
            
            default: return
            }
    }

    const handleTypeChange = (type) => {
        setCurrentQuestion(current => ({...current, type:type}))
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
        
        <input className="quest" placeholder="Add Question" type="text" onChange={(e) => setCurrentQuestion((current) => ({...current, name:e.target.value}))} />
        <Types types={types} setSelected={setSelected} onChange={handleTypeChange}/><button className={!isActive ? "save" : "save-hidden"} onClick={handleClick}>Save</button><br/>
        {questionType()}
    </div>
    
  );
};

export default CreateQuest;
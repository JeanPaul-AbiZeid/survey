import React, {useState, useEffect} from "react";

const Types = ({text }) => {
  
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
      try {
          const res = await fetch("http://127.0.0.1:8000/api/gettypes");
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
  };
  getTypes();
  }, []);
  

  return (
    <select id="types">
      {types.map((type) => (
        <option key={type.id}> {type.type}</option>
      ))}
    </select>
  );
};

export default Types;
import React, {useState} from "react";
import Results from "./Results"
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [defition, setDefinition] = useState(null); //empty cause we gonna show some results


function handleResponse(response){
      setDefinition(response.data[0]);
    
}


function search(event){
    event.preventDefault();
 


    let apiUrl =` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
}
function handleKeywordChange(event){
    
    setKeyword(event.target.value);
}

//useState to have a value which is going to be changed everytime I'm looking up sth new 
//we need to store the value- we use state- we are updating this value
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search"
                onChange={handleKeywordChange} />

                <Results results={defition}/>
            </form>
        </div>
    )
}
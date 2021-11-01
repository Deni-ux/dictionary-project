import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");


function handleResponse(response){
    console.log(response.data);
}


function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);


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
            <form className="text-center" onSubmit={search}>
                <input type="search"
                onChange={handleKeywordChange}
                
                />
            </form>
        </div>
    )
}
import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
                onChange={handleKeywordChange}
                
                />
            </form>
        </div>
    )
}
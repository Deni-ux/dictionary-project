import React, {useState} from "react";
import Results from "./Results"
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props){
    let [loaded, setLoaded]= useState(false);
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [defition, setDefinition] = useState(null); //empty cause we gonna show some results


function handleResponse(response){
      setDefinition(response.data[0]);
    
}


function search(){
   
    let apiUrl =` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}
//useState to have a value which is going to be changed everytime I'm looking up sth new 
//we need to store the value- we use state- we are updating this value
    
if (loaded){
    return (
        <div className="Dictionary">
           <section> 
               <h2 className="mb-4 "> What word do you want to look up?</h2>
               <form onSubmit={handleSubmit}>
                <input type="search"
                class="form-control"
               defaultValue={props.defaultWord}
                onChange={handleKeywordChange} 
                autoComplete="off"
                aria-label="Type a word"
               />
</form>
        <div className="hint"> Suggested words: <em> sunny, love, romanticism..</em></div>
            </section>
                <Results results={defition}/>
            
        </div>
    )
} else {
    load();
    return ("Loading..")
}
}

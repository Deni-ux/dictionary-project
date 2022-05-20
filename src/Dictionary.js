import React, {useState} from "react";
import Results from "./Results";
import Images from "./Images";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props){
    let [loaded, setLoaded]= useState(false);
    let [keyword, setKeyword] = useState(props.defaultWord);
    let [results, setResults] = useState(null); //empty cause we gonna show some results
    let [photos, setPhotos]= useState(null);


function handleDictionaryResponse(response){
      setResults(response.data[0]);
    
}

function handlePexelsResponse(response){

    setPhotos(response.data.photos);

}


function search(){
   
    let apiUrl =` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey ="563492ad6f9170000100000119cc8041987642d287052c64cc6151e4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;

    let headers ={Authorization: `Bearer ${pexelsApiKey}`};

    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
                className="form-control"
               defaultValue={props.defaultWord}
                onChange={handleKeywordChange} 
                autoComplete="off"
                aria-label="Type a word"
               />
</form>
        <div className="hint"> Suggested words: <em> sunny, love, romanticism..</em></div>
            </section>
                <Results results={results}/>
              <Images photos={photos}/>
        </div>
    )
} else {
    load();
    return ("Loading..")
}
}

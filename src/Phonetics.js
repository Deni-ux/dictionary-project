import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    console.log(props.phonetic);

    return(
        <div className="Phonetics">
            <span className="word">/{props.phonetic.text}/</span>
          <br />
          <br />
             <span className="audio"> <a href={props.phonetic.audio}>Listen🔊</a></span>
           
            
      </div>
    );

} 
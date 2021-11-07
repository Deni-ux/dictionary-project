import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
  
  const audio = new Audio(props.phonetic.audio);
  function playSound(){
    audio.play();
  }

    return(
        <div className="Phonetics">
            <span className="word">/{props.phonetic.text}/</span>
        
        <span className="audio">  <i class="fas fa-volume-up" onClick={playSound}></i>
            </span>
           
            
      </div>
    );

} 
import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props){
  
    return (
        <div className="Meaning">
         <h3><em>{props.meaning.partOfSpeech}</em></h3>

        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                   
                      <div className="definition">{definition.definition}</div> 
                       <div className="example">
                        <em> " {definition.example} "</em></div>
                <div className="synonyms"> Similar: 
                        <Synonyms synonyms={definition.synonyms} /></div>
                   
                </div>
            );
        })}

        
        </div>
    )
}

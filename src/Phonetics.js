import React from "react";


export default function Phonetics(props){
    console.log(props.phonetic);

    return(
        <div className="Phonetics">
            <p>/{props.phonetic.text}/
            <br />
           
    <audio className="mt-3"
        controls
        src={props.phonetic.audio}>     
    </audio>

       </p> </div>
    );

} 
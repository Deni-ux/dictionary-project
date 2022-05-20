import React from "react";
import "./Images.css";

export default function Images(props){
    
    
    if (props.photos) {
        return(
        
            <section className="Images">
              
                <div className="row">
                   
             {props.photos.map(function(photo, index){
                 return(
                      <div className="col-3"  key={index}>
                         <a href={photo.url} target="_blank" rel="noreferrer">
                          <img src={photo.src.landscape}
                   className="img-fluid" 
                   alt="images"/></a>
                     </div>    
                 );
                 })}
               
                </div>
        </section>
    );
    } else {
        return null;
    }
    
}
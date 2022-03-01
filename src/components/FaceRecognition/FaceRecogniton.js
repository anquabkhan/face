import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({ imageurl, box }) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img id= 'inputimage' src= { imageurl } alt="img not found" width='700px'/>   
                <div className="bounding-box" style= {{top: box.toprow , bottom: box.bottomrow, right: box.rightcol, left: box.leftcol }}>                          
                <p></p>
            </div>            
            </div>
                
        </div>
    )
}


export default FaceRecognition 
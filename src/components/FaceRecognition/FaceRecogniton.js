import React from "react";

const FaceRecognition = ({ imageurl }) => {
    return(
        <div className="form center mt2 mb6 absalute">
            <img src= { imageurl } alt="img not found" width='700px'/>
        </div>
    )
}


export default FaceRecognition 
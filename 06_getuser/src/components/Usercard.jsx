import React from "react";

const Usercard = (props) =>{
    return(
    <div className="usercard">
        <img className="userImg" src={props.data.picture.large} />
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city},{props.data.location.state}</p>
    </div>
    )
}

export default Usercard;
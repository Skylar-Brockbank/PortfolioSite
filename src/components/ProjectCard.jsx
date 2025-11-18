import React from "react";
import "./projectCardStyles.css"

function ProjectCard(props){
  const cardStyles={
    backgroundColor:"rgba(217, 205, 159, 0.88)",
    color:"rgba(0, 9, 78, 1)",
    padding:"1em",
    borderRadius:"1em"
  }
  const contentStyles={
  }
  const handleClick=()=>{
    props.action(props.id)
  }

  return(
    <div className="glow" key={props.id} style={cardStyles} onClick={handleClick}>
      <img src={props.image[0]} width={"100%"}></img>
      <div style={contentStyles}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
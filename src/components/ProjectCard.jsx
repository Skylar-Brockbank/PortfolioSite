import React from "react";

function ProjectCard(props){
  const cardStyles={
    backgroundColor:"green",
    padding:"1em"
  }
  const contentStyles={
  }
  const handleClick=()=>{
    props.action(props.id)
  }

  return(
    <div key={props.id} style={cardStyles} onClick={handleClick}>
      <img src={props.image} width={"100%"}></img>
      <div style={contentStyles}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
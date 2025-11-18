import React from "react";
import ProjectCard from "./ProjectCard";
import galleryData from "../assets/galleryData";

function ProjectGrid(props){
  const gridStyles={
    display:"grid",
    gridTemplateColumns:"repeat(3, 1fr)",
    gridGap:"1em",
    background:"rgba(217, 205, 159, 0.2)",
    padding:"1em",
    borderRadius:"2em"
  }
  const handleChange=(arg)=>{
    props.handleDetail(arg)
  }

  return(
    <div style={gridStyles}>
      {galleryData.map((i,dex)=>{return(<ProjectCard key={dex} id={dex} action={handleChange} image={i.image} title={i.title} description={i.description}/>)})}
    </div>
  )
}

export default ProjectGrid
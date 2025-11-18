import ProjectGrid from "./ProjectGrid"
import React from "react"
import github from "../assets/github-mark.svg"
import linkedin from "../assets/linkedin-mark.svg"

function Footer(){

  const divStyles={
    color:"rgba(255,255,255,1)",
    padding:"1em",
    alignContent:"center",
    justifyContent:"center"
  }
  const logoStyles={
    height:"3em",
    margin:"0.5em"
  }
  return(
    <div style={divStyles}>
      <div>
        <a href="https://github.com/Skylar-Brockbank" target="_blank">
          <img alt="Github link" src={github} style={logoStyles}></img>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/skylar-brockbank/" target="_blank">
          <img alt="Linkedin link" src={linkedin} style={logoStyles}></img>
        </a>
      </div>
    </div>
  )
}
export default Footer
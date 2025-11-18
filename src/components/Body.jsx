import ProjectCard from "./ProjectCard"
import galleryData from "../assets/galleryData"
import "../components/ProjectCardStyles.css"

function Body(props){

  const handleChange=(arg)=>{
    props.func(arg)
  }

  const divStyles={
    backgroundColor:"rgba(217, 205, 159, 0.88)",
    // color:"rgba(44, 19, 15, 1)",
    color:"rgba(0, 9, 78, 1)",
    padding:"1em",
    // margin:"1em"
    marginTop:"1em",
    borderRadius:"0.5em"
  }
  const layoutBox={
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    justifyContent:"space-around",
    gap:"1em"
  }
  const layoutGrid={
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    gap:"0.5em"
  }
  const buttonStyles={
    margin:"1em"
  }
  const listStyles={
    textDecoration:"underline",
    // border:"solid rgba(0,0,0,0.05)",
    borderRadius:"1em",
    backgroundColor:"rgba(0,0,0,0.06)",
    margin:"0.25em",
    padding:"0.5em"
  }
  const handleGallery=()=>{
    props.change("gallery")
  }

  const skills =[
    "Javascript",
    "Node.js",
    "Express.js",
    "React",
    "Redux",
    "Firebase",
    "AWS",
    "Azure",
    "Test Driven Development",
    "SQL",
    "PostgreSQL",
    "GraphQL",
    "Redis",
    "Docker",
    "Git",
    "Shopify Hydrogen",
    "Shopify Oxygen",
    "Remix",
    "Vite"
  ]
  return(
    <>
      <div style={divStyles}>
        <h2>Hi, I'm Skylar</h2>
        {/* <p>I'm a great developer, the best, perhaps. I make websites and web apps, great web apps, some people make bad web apps, did you know that, many many web apps, not so good, you look in their consoles and it's like whoa, lots of errors. Lots. of. Errors. Not me. My web apps are <strong>clean</strong>. Clean clean apps.</p> */}
        <p>I'm passionate about tackling difficult problems, and programming is one of my favorite ways to do it. I love to learn new and exciting ways to think about things.</p>
        <p>These are some of the projects I've worked on as a Full Stack Web Developer</p>
      </div>
      
      <div style={divStyles}>
        <h2>Projects</h2>
        <div style={layoutBox}>
          <ProjectCard key={0} id={0} action={handleChange} image={galleryData[0].image} title={galleryData[0].title} description={galleryData[0].description}/>
          <ProjectCard key={1} id={1} action={handleChange} image={galleryData[1].image} title={galleryData[1].title} description={galleryData[1].description}/>
          <ProjectCard key={2} id={2} action={handleChange} image={galleryData[2].image} title={galleryData[2].title} description={galleryData[2].description}/>
        </div>
        <button style={buttonStyles} onClick={handleGallery}>See More</button>
      </div>
      <div style={divStyles}>
        <h2>List of skills</h2>
        <div style={layoutGrid}>
          {skills.map(s=>{return(<p style={listStyles}>{s}</p>)})}
        </div>
      </div>
    </>
  )
}
export default Body
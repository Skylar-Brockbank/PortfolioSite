import personalMark from "../assets/personal-mark.svg"
function Navigation(props){

  const container={
    width:"100vw",
    boxSizing:"border-box",
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"rgba(11, 1, 44, 0.9)",
    borderBottom:"solid rgba(201, 167, 0, 1)",
    position:"fixed",
    top:"0",
    left:"0",
    padding:"1em",
    color:"white"
  }
  const left={
    display:"inline",
    justifySelf:"start"
  }
  const right={
    display:"inline",
    justifySelf:"end",
    padding:"1em"
  }
  const handleChange=(arg)=>{
    props.handleSetPage(arg)
  }
  const handleHome=()=>{
    handleChange("home")
  }
  const handleGallery=()=>{
    handleChange("gallery")
  }
  const iconStyles={
    height:"2em"
  }
  const divStyles={
    alignContent:"center"
  }
  return(
    <>
    <div style={container}>
      <div style={divStyles}>
        <img src={personalMark} style={iconStyles} onClick={handleHome}></img>
      </div>
      <div style={divStyles}>
        <p style={right} onClick={handleHome}>Home</p>
        <p style={right} onClick={handleGallery}>Gallery</p>
        <p style={right} onClick={props.contact}>Contact Me</p>

      </div>
    </div>
    </>
  )
}
export default Navigation
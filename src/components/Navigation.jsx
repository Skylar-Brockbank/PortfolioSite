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
    padding:"1em",
    // paddingRight:"2em"
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
  const handleTest=()=>{
    handleChange("detail")
  }
  return(
    <>
    <div style={container}>
      <div>
        <p style={left}>This is the navigation bar</p>
      </div>
      <div>
        <p style={right} onClick={handleHome}>Home Link</p>
        <p style={right} onClick={handleGallery}>Gallery</p>
        <p style={right}>Contact Link</p>

      </div>
    </div>
    </>
  )
}
export default Navigation
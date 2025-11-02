function Navigation(){

  const container={
    width:"100vw",
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"rgba(65, 65, 65, 1)",
    position:"fixed",
    top:"0",
    left:"0",
    padding:"1em"
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
  return(
    <>
    <div style={container}>
      <div>
        <p style={left}>This is the navigation bar</p>
      </div>
      <div>
        <p style={right}>Home Link</p>
        <p style={right}>Contact Link</p>
      </div>
    </div>
    </>
  )
}
export default Navigation
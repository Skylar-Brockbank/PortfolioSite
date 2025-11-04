function Hero(){

  const heroStyles={
    backgroundColor:"rgba(10, 10, 128, 0)",
    width:"100%",
    height:window.innerHeight*0.5,
    alignContent:"center",
    color:"rgba(223, 208, 168, 1)"
  }
  const buttonStyles={
    backgroundColor:"rgb(150, 25, 25)",
    color:"white"
  }
  return(
    <>
    <div style={heroStyles}>
      <h1>Hold on to your butt</h1>
      <p>Things are about to get crayzay</p>
      <button style={buttonStyles}>Contact Me</button>
    </div>
    </>
  )
}
export default Hero
function Hero(){

  const heroStyles={
    backgroundColor:"rgba(10, 10, 128, 0)",
    width:"100%",
    height:window.innerHeight*0.7,
    alignContent:"center"
  }
  return(
    <>
    <div style={heroStyles}>
      <h1>Hold on to your butt</h1>
      <p>Things are about to get crayzay</p>
      <button>Contact Me</button>
    </div>
    </>
  )
}
export default Hero
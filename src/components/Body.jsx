function Body(){

  const divStyles={
    backgroundColor:"rgba(217, 205, 159, 0.88)",
    color:"rgba(85, 37, 29, 1)",
    padding:"1em",
    // margin:"1em"
    marginTop:"1em"
  }
  const layoutBox={
    display:"flex",
    justifyContent:"space-around"
  }
  const layoutGrid={
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr"
  }
  const faqCard={
    backgroundColor:"rgba(110, 104, 87, 0.62)"
  }
  return(
    <>
      <div style={divStyles}>
        <h3>Card 1 - The Overview</h3>
        <p>An Overview of me as a developer, I'm a great developer, the best, perhaps. I make websites and web apps, great web apps, some people make bad web apps, did you know that, many many web apps, not so good, you look in their consoles and it's like whoa, lots of errors. Lots. of. Errors. Not me. My web apps are <strong>clean</strong>. Clean clean apps.</p>
      </div>
      
      <div style={divStyles}>
        <h3>Card 3 - Demos</h3>
        <p>These are Examples</p>
        {/* <ul>
          <li>Example</li>
          <li>Example</li>
          <li>Example</li>
        </ul> */}
        
        <div style={layoutBox}>
          <div style={divStyles}>
            <p>example Title</p>
            <p>example Description</p>
          </div>
          <div style={divStyles}>
            <p>example Title</p>
            <p>example Description</p>
          </div>
          <div style={divStyles}>
            <p>example Title</p>
            <p>example Description</p>
          </div>
        </div>
      </div>
      <div style={divStyles}>
        <h3>Card 2 - Skillz</h3>
        <p>List of skills</p>
        <div style={layoutGrid}>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
          <p>skill</p>
        </div>
      </div>
      <div style={divStyles}>
        <h3>Card 5 - FAQ?</h3>
        <p>FAQ</p>
        <div style={faqCard}>
          <p>Q: How did you manage to hone your legendary skills as a programmer?</p>
          <p>A: Long and difficult training in a mountain monestary with with an order of developer monks</p>
        </div>
        <div style={faqCard}>
          <p>Q: Is it true that you once built a game engine in a single day?</p>
          <p>A: It was a very basic game engine, and to say it took me the whole day is a bit of a stretch, maybe 2-3 hours</p>
        </div>
        <div style={faqCard}>
          <p>Q: What kind of project are you gonna work on next?</p>
          <p>A: RAFO</p>
        </div>
      </div>
    </>
  )
}
export default Body
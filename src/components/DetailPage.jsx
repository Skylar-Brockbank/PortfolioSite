export default function DetailPage(props){
  const divStyles={
    backgroundColor:"rgba(217, 205, 159, 0.88)",
    // color:"rgba(44, 19, 15, 1)",
    color:"rgba(0, 9, 78, 1)",
    padding:"1em",
    // margin:"1em"
    marginTop:"1em",
    borderRadius:"0.5em"
  }
  console.log(props.data)
  return(
    <div style={divStyles}>
      <h1>{props.data.title}</h1>
    </div>
  )
}
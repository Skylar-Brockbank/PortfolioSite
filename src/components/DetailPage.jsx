import ReactDom from 'react-dom';
import { useState } from 'react';

export default function DetailPage(props){
  const [image,setImage]=useState(0)
  if(props.visible==false){
    return(<></>)
  }
  const divStyles={
    backgroundColor:"rgba(217, 205, 159, 0.88)",
    // color:"rgba(44, 19, 15, 1)",
    color:"rgba(0, 9, 78, 1)",
    padding:"1em",
    // margin:"1em"
    marginTop:"1em",
    borderRadius:"0.5em",
    position:"relative",
    zIndex:"200",
    width:"70%",
    height:"80%",
    margin:"0 auto",
    textAlign:"center",
    overflowY:"scroll",
    display:"flex",
    flexDirection:"column"
  }
  const overlayStyles={
    backgroundColor:"rgba(0, 0, 0, 0.54)",
    position:"absolute",
    top:"0",
    left:"0",
    height:"100%",
    width:"100%",
    zIndex:"100"
  }
  const containerStyles={
    position:"fixed",
    top:"0",
    left:"0",
    height:"100%",
    width:"100%",
    alignContent:"center"
  }
  const imageContainerStyles={
    width:"90%",
    height:"50%",
    display:"flex",
    // overflow:"scroll",
    backgroundColor:"rgba(0,0,0,0.1)",
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center",
    margin:"0 auto",
    padding:"1em"
  }
  const imageStyles={
    height:"100%",
    padding:"1em"
  }
  let slideButtonStyles={
    fontSize:"5em",
    margin:"auto",
    padding:0,
    color:"rgba(33, 33, 33, 1)"
  }
  if(props.data.image.length==1){
    slideButtonStyles.color="rgba(100, 100, 100, 0)"
  }
  const listStyles={
    width:"fit-content",
    margin:"0 auto"
  }
  const infoStyles={
    display:"grid",
    gridTemplateColumns:"1fr 3fr",
    width:"95%",
    padding:0,
    margin:"0 auto",
    justifyContent:"space-between"
  }
  const techContainerStyles={
    margin:"1em",
    paddingBottom:"1em",
    backgroundColor:"rgba(0,0,0,0.1)"
  }
  const handleClose=()=>{
    props.func()
  }
  const handleAdd=()=>{
    const l = props.data.image.length
    setImage((image+1)%l)
  }
  const handleSub=()=>{
    const l = props.data.image.length
    setImage((image-1)%l)
  }
  return ReactDom.createPortal(
    <div style={containerStyles}>
    <div style={overlayStyles} onClick={handleClose}></div>
      <div style={divStyles}>
        <h1>{props.data.title}</h1>
        <div style={imageContainerStyles}>
        {/* {props.data.image.map((i,dex)=>{return(<img key={dex} src={i} style={imageStyles}></img>)})} */}
        <h1 onClick={handleSub} style={slideButtonStyles}>{"\<"}</h1>
        <img src={props.data.image[image]}></img>
        <h1 onClick={handleAdd} style={slideButtonStyles}>{"\>"}</h1>
        </div>
        <div style={infoStyles}>
          <div style={techContainerStyles}>
            <h4>Technologies</h4>
            <ul style={listStyles}>
              {props.data.technologies.map((t,dex)=>{return(<li key={`t${dex}`}>{t}</li>)})}
            </ul>
          </div>
          <div style={techContainerStyles}>
            <p>{props.data.full_description}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}
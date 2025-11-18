
import ReactDom from 'react-dom';
import { useState } from 'react';

export default function Contact(props){
  const [submitted,setSubmitted]=useState(false)
  if(props.visible==false){
    return(<></>)
  }
  
  const prefix="https://docs.google.com/forms/d/e/1FAIpQLScqDzxPJI9I-sIjgKxn6oxfXsv-KvDYyx42gVtvct96H88bAw/formResponse"
  
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
 
  const handleClose=()=>{
    setTimeout(setSubmitted(false),100)
    props.func()
  }
  const handleForm=async()=>{
    setTimeout(()=>{
      setSubmitted(true)
    },100)
  }
  if(submitted){
      return ReactDom.createPortal(
        <div style={containerStyles}>
        <div style={overlayStyles} onClick={handleClose}></div>
          <div style={divStyles}>
            <h2>Your Message Has been sent</h2>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>,
        document.getElementById("portal")
      )
    }else{
      return ReactDom.createPortal(
        <div style={containerStyles}>
        <div style={overlayStyles} onClick={handleClose}></div>
          <div style={divStyles}>
            <iframe name='dummy' id='dummy' style={{display:'none'}}></iframe>
            {/* <form action={prefix} method='POST' onSubmit={handleForm}> */}
            <form action={prefix} method='POST' target="dummy" onSubmit={handleForm}>
              <label>Your prefered Name: <input name='entry.780464875' id="name" type='text' required></input></label>
              <br></br>
              <label>Your Email: <input name='entry.1198297426' id="email" type='email' required></input></label>
              <br></br>
              <label>How Can I Help? <input name='entry.1898480093' id="message" type='text' required></input></label>
              <br></br>
              <button type='submit'>send</button>
            </form>
          </div>
        </div>,
        document.getElementById("portal")
      )

    }
}


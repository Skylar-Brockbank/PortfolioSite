import { useState } from 'react'
import galleryData from './assets/galleryData.js'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import DetailPage from './components/DetailPage.jsx'
import Contact from './components/Contact.jsx'

import './App.css'
import "./components/modal.css"

function App() {
  const [currentPage,setCurrentPage] = useState({page:"home",id:null,portal:false,contact:false});

  const handleSetPage=(arg)=>{
    const target = document.getElementById("content")
    target.classList.remove("opening")
    target.classList.add("closing")
    setTimeout(()=>{
      window.scrollTo(0,0)
      target.classList.remove("closing")
      target.classList.add("opening")},501)
    setTimeout(()=>{setCurrentPage({...currentPage,page:arg})},500)
  }
  const handleDetail=(arg)=>{
    setCurrentPage({...currentPage,portal:true,id:arg})
  }
  const handleContact=()=>{
    setCurrentPage({...currentPage,contact:true})
  }
  const portalOn=()=>{
    setCurrentPage({...currentPage,portal:true})
  }
  const portalOff=()=>{
    setCurrentPage({...currentPage,portal:false})
  }
  const contactOff=()=>{
    setCurrentPage({...currentPage,contact:false})
  }
  if(currentPage.page=="home"){
    return (
      <>
        <Navigation contact={handleContact} handleSetPage={handleSetPage}/>
        <div id="content" className='opening'>
          <DetailPage func ={portalOff} visible={currentPage.portal} data={galleryData[currentPage.id]}/>
          <Contact func={contactOff} visible={currentPage.contact}/>
          <Hero func={handleContact}/>
          <Body func={handleDetail} change={handleSetPage}/>
        </div>
        <Footer/>
      </>
    )
  }else if(currentPage.page=="gallery"){
    return (
      <>
        <Navigation contact={handleContact} handleSetPage={handleSetPage}/>
        <div id="content" className='opening'>
          <h1>Project Gallery</h1>
          {<DetailPage func ={portalOff} visible={currentPage.portal} data={galleryData[currentPage.id]}/>}
          <Contact func={contactOff} visible={currentPage.contact}/>
          <ProjectGrid handleDetail={handleDetail}/>
        </div>
        <Footer/> 
      </>
    )
  }
}

export default App

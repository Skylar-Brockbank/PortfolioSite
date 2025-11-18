import { useState } from 'react'
import galleryData from './assets/galleryData'
import Body from './components/Body'
import Footer from './components/footer'
import Hero from './components/hero'
import Navigation from './components/navigation'
import ProjectGrid from './components/ProjectGrid'
import DetailPage from './components/DetailPage'
import Contact from './components/Contact'

import './App.css'

function App() {
  const [currentPage,setCurrentPage] = useState({page:"home",id:null,portal:false,contact:false});

  const handleSetPage=(arg)=>{
    window.scrollTo(0,0)
    setCurrentPage({...currentPage,page:arg})
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
        <DetailPage func ={portalOff} visible={currentPage.portal} data={galleryData[currentPage.id]}/>
        <Contact func={contactOff} visible={currentPage.contact}/>
        <Hero func={handleContact}/>
        <Body func={handleDetail} change={handleSetPage}/>
        <Footer/>
      </>
    )
  }else if(currentPage.page=="gallery"){
    return (
      <>
        <Navigation contact={handleContact} handleSetPage={handleSetPage}/>
        <h1>Project Gallery</h1>
        {<DetailPage func ={portalOff} visible={currentPage.portal} data={galleryData[currentPage.id]}/>}
        <Contact func={contactOff} visible={currentPage.contact}/>
        <ProjectGrid handleDetail={handleDetail}/>
        <Footer/> 
      </>
    )
  }
}

export default App

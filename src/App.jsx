import { useState } from 'react'
import galleryData from './assets/galleryData'
import Body from './components/Body'
import Footer from './components/footer'
import Hero from './components/hero'
import Navigation from './components/navigation'
import ProjectGrid from './components/ProjectGrid'
import DetailPage from './components/DetailPage'

import './App.css'

function App() {
  const [currentPage,setCurrentPage] = useState({page:"home",id:null});

  const handleSetPage=(arg)=>{
    setCurrentPage({...currentPage,page:arg})
  }
  const handleDetail=(arg)=>{
    setCurrentPage({...currentPage,page:"detail",id:arg})
  }

  console.log(currentPage)
  console.log(galleryData[currentPage.id])
  if(currentPage.page=="home"){
    return (
      <>
        <Navigation handleSetPage={handleSetPage}/>
        <Hero/>
        <Body/>
        <Footer/>
      </>
    )
  }else if(currentPage.page=="gallery"){
    return (
      <>
        <Navigation handleSetPage={handleSetPage}/>
        <h1>Project Gallery</h1>
        <ProjectGrid handleDetail={handleDetail}/>
        <Footer/> 
      </>
    )
  }else if(currentPage.page=="detail"){
    return(
    <>
      <Navigation handleSetPage={handleSetPage}/>
      <DetailPage data={galleryData[currentPage.id]}/>
      <Footer/>
    </>
    )
  }
}

export default App

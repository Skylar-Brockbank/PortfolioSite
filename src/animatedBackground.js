
import getBackgroundGradients from './bgComponents/backgroundGradients.js';
import buildContent from './bgComponents/buildScreenElements.js';
import { getMetalTexture } from './bgComponents/backgroundGradients.js';

export default class backgroundBuilder{
  constructor(canvas,brush){
    this.canvas=canvas
    this.brush=brush
  }

  //This was retrofitted into a function that returns the animate function
  buildBackground(){
    let canvas=this.canvas
    let brush=this.brush

    let bgg=getBackgroundGradients(canvas,brush)
    let lineMetal=getMetalTexture(canvas,brush)
    let [data,rings,ringLinks] = buildContent(canvas,brush)

    //======FUNCTIONS=========
    
    const drawRingLinks=()=>{
      ringLinks.forEach(l=>{
        // brush.strokeStyle="rgba(246, 246, 246, 1)"
        brush.strokeStyle=lineMetal
        brush.lineWidth=l[2]
        brush.beginPath()
        brush.moveTo(l[0].pos[0],l[0].pos[1])
        brush.lineTo(l[1].pos[0],l[1].pos[1])
        brush.stroke()
      })
    }
    const fillScreen=(color)=>{
      brush.fillStyle=color
      brush.fillRect(0,0,canvas.width,canvas.height);
    }
    const applyBackground=(array)=>{
      array.forEach(g=>{
        fillScreen(g)
      })
    }
    const drawRings=()=>{
      rings.forEach(r=>{r.draw()})
    }
    const updateRings=()=>{
      rings.forEach(r=>{r.update()})
    }
    
    const update=()=>{
      data.update()
      data.updateLinks()
      updateRings()
    }
    const draw=()=>{
      brush.clearRect(0,0,canvas.width,canvas.height)
      applyBackground(bgg);
      data.drawAllLinks()
      data.draw()
      drawRings()
      drawRingLinks()
    }
    //========================



    //=========ACTIONS==========
    
    const animate=()=>{
      update()
      draw()
      requestAnimationFrame(animate)
    }
    return animate
  }
}

import getBackgroundGradients from './bgComponents/backgroundGradients.js';
import buildCanvas from './bgComponents/canvas.js';
import ObSet from './bgComponents/movableObjects';
import Ring from './bgComponents/rings';
import buildContent from './bgComponents/buildScreenElements.js';
import { getMetalTexture } from './bgComponents/backgroundGradients.js';

const anchor = document.getElementById("root")

//creates a fullsized canvas, adds it to the anchor element and creates a brush
let [canvas,brush] = buildCanvas(anchor)

//creates the gradient background for the page
let bgg=getBackgroundGradients(canvas,brush)
let lineMetal=getMetalTexture(canvas,brush)


window.addEventListener("resize",e=>{
  canvas.height=window.innerHeight
  canvas.width=window.innerWidth
  bgg=getBackgroundGradients(canvas,brush)
  lineMetal=getMetalTexture(canvas,brush)
})

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

export const animate=()=>{
  update()
  draw()
  requestAnimationFrame(animate)
}
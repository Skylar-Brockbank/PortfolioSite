const buildCanvas=(anchor)=>{
  let canvas = document.createElement("canvas")
  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;
  canvas.style.position="fixed"
  canvas.style.top="0"
  canvas.style.left="0"
  canvas.style.zIndex="-1"
  anchor.appendChild(canvas)
  
  const brush = canvas.getContext("2d");
  return [canvas,brush]
}

export default buildCanvas
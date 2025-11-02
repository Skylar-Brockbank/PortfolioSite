
const getBackgroundGradients=(canvas, brush)=>{
  const bgGrad=brush.createLinearGradient(0,0,canvas.width,canvas.height)
  bgGrad.addColorStop(0,"rgba(0, 20, 133, 1)")
  bgGrad.addColorStop(1,"rgba(2, 3, 45, 1)")
  
  const bgGradL2=brush.createLinearGradient(0,canvas.height,canvas.width,0)
  bgGradL2.addColorStop(0,"rgba(31, 14, 62, 1)")
  bgGradL2.addColorStop(0.4,"rgba(41, 17, 87, 0.5)")
  bgGradL2.addColorStop(0.95,"rgba(1, 15, 216, 0.36)")
  bgGradL2.addColorStop(1,"rgba(41, 17, 87, 0.5)")
  
  const vin=brush.createRadialGradient(
    canvas.width*0.5,
    canvas.height*0.5,
    10,
    canvas.width*0.5,
    canvas.height*0.5,
    canvas.width*0.5
  )
  vin.addColorStop(0,"rgba(31, 14, 62, 0)")
  vin.addColorStop(1,"rgba(11, 5, 22, 1)")

  let backgroundGradients=[
    bgGrad,
    bgGradL2,
    vin
  ]
  return backgroundGradients
}
export const getMetalTexture=(canvas,brush)=>{
  const lineMetal=brush.createLinearGradient(0,0,canvas.width,0)
  lineMetal.addColorStop(0,"rgba(201, 167, 0, 1)")
  lineMetal.addColorStop(0.1,"rgba(220, 212, 175, 1)")
  lineMetal.addColorStop(0.2,"rgba(201, 167, 0, 1)")
  lineMetal.addColorStop(0.49,"rgba(201, 167, 0, 1)")
  lineMetal.addColorStop(0.5,"rgba(220, 212, 175, 1)")
  lineMetal.addColorStop(0.51,"rgba(201, 167, 0, 1)")
  lineMetal.addColorStop(0.7,"rgba(201, 167, 0, 1)")
  lineMetal.addColorStop(0.8,"rgba(220, 212, 175, 1)")
  lineMetal.addColorStop(0.1,"rgba(201, 167, 0, 1)")
  return lineMetal
}

export default getBackgroundGradients
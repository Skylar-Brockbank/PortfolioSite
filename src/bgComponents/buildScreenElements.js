import Ring from "./rings"
import ObSet from "./movableObjects"

export default function buildContent(canvas,brush){
    let data = new ObSet(canvas,brush)

    const carea=(canvas.height*canvas.width)/10000
    const obNum=Math.floor(carea*0.55)
    data.createObjects(obNum)
    
    
    let rings=[]
    rings.push(new Ring(0,0,300,3,canvas))
    rings.push(new Ring(0,0,250,6,canvas))
    rings.push(new Ring(canvas.width,canvas.height,400,1,canvas))
    rings.push(new Ring(canvas.width,canvas.height,370,5,canvas))
    
    let iurr=rings[1]
    iurr.newRingPoint(4,0,5)
    iurr.newRingPoint(0.1,0.001,5)
    iurr.newRingPoint(0.5,0.0015,4)
    iurr.newRingPoint(0.9,0.0008,8)
    iurr.newRingPoint(0.7,-0.0011,3)
    iurr.newRingPoint(1.9,0.0015,8)
    iurr.newRingPoint(2.9,-0.0004,8)
    iurr.newRingPoint(3.9,0.0013,8)
    let ourr=rings[0]
    ourr.newRingPoint(0.1,0.0013,5)
    ourr.newRingPoint(2.1,-0.002,4)
    ourr.newRingPoint(6.1,0.002,8)
    
    let illr=rings[3]
    illr.newRingPoint(0,0,5)
    illr.newRingPoint(0.1,0.001,1)
    illr.newRingPoint(1.1,-0.0012,8)
    illr.newRingPoint(2.1,0.0013,7)
    illr.newRingPoint(3.1,-0.0014,6)
    illr.newRingPoint(4.1,0.0015,5)
    let ollr=rings[2]
    ollr.newRingPoint(0.1,0.0015,1)
    ollr.newRingPoint(2.1,-0.002,2)
    ollr.newRingPoint(4.1,0.0013,3)
    
    let ringLinks=[
      [rings[1].points[0],rings[1].points[1],1],
      [rings[1].points[0],rings[1].points[2],2],
      [rings[1].points[0],rings[1].points[3],1.5],
      // [rings[1].points[3],rings[1].points[4],1.1],
      [rings[1].points[0],rings[1].points[5],0.8],
      [rings[1].points[0],rings[1].points[6],1.7],
    
      [rings[3].points[1],rings[1].points[3],0.5],
    
      [rings[3].points[0],rings[3].points[1],1.5],
      [rings[3].points[0],rings[3].points[2],0.5],
      [rings[3].points[0],rings[3].points[3],2],
      [rings[3].points[0],rings[3].points[4],4],
      [rings[3].points[2],rings[3].points[5],1],
    
      [rings[2].points[0],rings[0].points[0],0.5],
    
      [rings[2].points[1],rings[3].points[1],0.5],
      [rings[0].points[1],rings[3].points[2],0.8],
      [rings[0].points[1],rings[1].points[0],0.8],
    ]
    return [data,rings,ringLinks]
  }
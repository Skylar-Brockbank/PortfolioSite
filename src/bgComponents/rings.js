class Ring{
  constructor(cx=0,cy=0,r=50,thickness=1,canvas){
    this.center=[cx,cy]
    this.ratioCoords=[cx/canvas.width,cy/canvas.height]
    this.radius=r
    this.thickness=thickness
    this.points=[]
    this.canvas=canvas
    this.brush=canvas.getContext('2d')
    const metalTexture=this.brush.createLinearGradient(0,0,this.radius*2,this.radius*2)
    metalTexture.addColorStop(0,"rgba(201, 167, 0, 1)")
    metalTexture.addColorStop(0.18,"rgba(92, 83, 41, 1)")
    metalTexture.addColorStop(0.4,"rgba(216, 205, 179, 1)")
    metalTexture.addColorStop(0.3,"rgba(201, 167, 0, 1)")
    metalTexture.addColorStop(0.7,"rgba(201, 167, 0, 1)")
    metalTexture.addColorStop(0.9,"rgba(255, 250, 208, 1)")
    metalTexture.addColorStop(1,"rgba(212, 163, 56, 1)")
    this.color=metalTexture
  }


  newRingPoint(rad=0,speed=1,size=this.r/20){
    const pos=this.radToCoord(rad)
    this.points.push({rad:rad,speed:speed,pos:pos,size:size})
  }
  radToCoord(rad){
    const x = this.center[0] + (Math.cos(rad)*this.radius);
    const y = this.center[1] + (Math.sin(rad)*this.radius);
    return[x,y]
  }
  drawRing(){
    this.brush.beginPath();
    this.brush.arc(this.center[0], this.center[1], this.radius, 0, 2 * Math.PI);
    this.brush.fillStyle = "rgba(0,0,0,0)";
    this.brush.fill();
    const temp=this.brush.lineWidth
    this.brush.lineWidth = this.thickness;
    this.brush.strokeStyle = this.color;
    this.brush.stroke();
    this.brush.lineWidth=temp
  }
  drawPoint(p){
    this.brush.beginPath();
    this.brush.arc(p.pos[0], p.pos[1], p.size, 0, 2 * Math.PI);
    this.brush.fillStyle = "rgba(255,255,255,0.1)";
    this.brush.fill();
    this.brush.lineWidth = this.thickness;
    this.brush.strokeStyle = "none";
    this.brush.stroke();
  }
  draw(){
    this.drawRing()
    this.points.forEach(p=>{this.drawPoint(p)})
  }
  update(){
    this.points.forEach((p)=>{
      p.rad+=p.speed
      p.pos=this.radToCoord(p.rad)
    })
    this.center=[this.canvas.width*this.ratioCoords[0],this.canvas.height*this.ratioCoords[1]]
  }

}

export default Ring
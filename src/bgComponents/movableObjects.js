class MobileObject{
  constructor(x=0,y=0,canvas){
    this.x=x
    this.y=y
    this.canvas=canvas
    this.color="yellow"
    this.draw=(brush)=>{
      brush.fillStyle=this.color
      brush.fillRect(this.x-1,this.y-1,2,2)
    }
    this.vector=[0.1,1]
  }
  move(coords){
    this.x= (this.x+coords[0])%this.canvas.width
    this.y= (this.y+coords[1])%this.canvas.height
  }
  update(){
    this.move(this.vector)
  }
}

class ObSet{
  constructor(canvas,brush){
    this.objects=[]
    this.links=[
    ]
    this.canvas=canvas
    this.ctx=brush
    this.ldist=((canvas.height+canvas.width)/2)*0.1
    this.speed=0.25
  }
  createObjects(num){
    for(let x=0;x<num;x++){
      let temp = new MobileObject(
        Math.random()*this.canvas.width,
        Math.random()*this.canvas.height,
        this.canvas
      )
      const xco=(Math.random()>0.5)?1:-1;
      const yco=(Math.random()>0.5)?1:-1;

      temp.vector=[
        xco*Math.pow(Math.random(),2)*this.speed,
        yco*Math.pow(Math.random(),2)*this.speed
      ]
      this.objects.push(temp)
    }
  }
  getDistance(x1,y1,x2,y2){
    const as=Math.pow(x1-x2,2)
    const bs=Math.pow(y1-y2,2)
    const c=Math.pow(as+bs,0.5)
    return c
  }
  updateLinks(){
    this.links=[]
    this.objects.forEach((i,idex)=>{
      this.objects.forEach((j,jdex)=>{
        if(this.getDistance(i.x,i.y,j.x,j.y)<this.ldist){
          this.links.push([idex,jdex])
        }
      })
    })
  }
  update(){
    this.objects.map(e=>{
      e.update()
    })
  }
  drawLink(e){
    this.ctx.strokeStyle="rgba(199, 195, 165, 0.19)"
    this.ctx.lineWidth=1
    this.ctx.beginPath()
    this.ctx.moveTo(this.objects[e[0]].x,this.objects[e[0]].y)
    this.ctx.lineTo(this.objects[e[1]].x,this.objects[e[1]].y)
    this.ctx.stroke()
  }
  drawAllLinks(){
    this.links.forEach(l=>{
      this.drawLink(l)
    })
  }
  draw(){
    this.objects.map(e=>{
      e.draw(this.ctx)
    })
  }
}

export default ObSet
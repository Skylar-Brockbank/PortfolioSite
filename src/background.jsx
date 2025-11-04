import { useRef,useEffect,useState } from "react"
import backgroundBuilder from "./animatedBackground"


function Background() {
  const [update,setUpdate]=useState(0)
  const canvasRef=useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists

    canvas.height=window.innerHeight
    canvas.width=window.innerWidth
    canvas.style.display="fixed"
    canvas.style.position="fixed"
    canvas.style.left="0"
    canvas.style.top="0"
    canvas.style.zIndex="-1"

    const ctx = canvas.getContext('2d'); // Get the 2D rendering context

    let bb=new backgroundBuilder(canvas,ctx)

    const animate=bb.buildBackground()

    animate()
  })
  useEffect(() => {
      const handleResize = () => {
        setUpdate(Math.random())
      };

      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);
  return (
    <>
    <canvas ref={canvasRef}></canvas>
    </>
  )
}

export default Background
import { useRef } from 'react';
import gsap from 'gsap';
import "../styles/Test.scss"
import Floating1 from "../assets/colo1.jpg";
import Floating2 from "../assets/colo2.jpg";
import Floating3 from "../assets/colo3.jpg";
import Floating4 from "../assets/colo4.jpg";
import Floating5 from "../assets/gris1.jpg";
import Floating6 from "../assets/gris2.jpg";
import Floating7 from "../assets/gris3.jpg";
import Floating8 from "../assets/gris4.jpg";
function Test() {

    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);
    let requestAnimationFrameId = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;
  
    const manageMouseMove = (e) => {
      const { movementX, movementY } = e
      xForce += movementX * speed;
      yForce += movementY * speed;
  
      if(requestAnimationFrameId == null){
        requestAnimationFrameId = requestAnimationFrame(animate);
      }
    }
  
    const lerp = (start, target, amount) => start * (1 - amount) +target * amount;
  
    const animate = () => {
      xForce = lerp(xForce, 0, easing);
      yForce = lerp(yForce, 0, easing);
      gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
      gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
      gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})
  
      if(Math.abs(xForce) < 0.01) xForce = 0;
      if(Math.abs(yForce) < 0.01) yForce = 0;
      
      if(xForce != 0 || yForce != 0){
        requestAnimationFrame(animate);
      }
      else{
        cancelAnimationFrame(requestAnimationFrameId)
        requestAnimationFrameId = null;
      }
    }
  
    return (
      <main onMouseMove={(e) => {manageMouseMove(e)}} className="main">
        <div ref={plane1} className="plane">
            <img 
              src={Floating1}
              alt='img'
              width={200}
            />
             <img 
              src={Floating2}
              alt='img'
              width={300}
            />
            <img 
              src={Floating7}
              alt='img'
              width={300}
            />
        </div>
        <div ref={plane2} className="plane">
            <img 
              src={Floating4}
              alt='img'
              width={300}
            />
             <img 
              src={Floating6}
              alt='img'
              width={250}
            />
            <img 
              src={Floating8}
              alt='img'
              width={225}
            />
        </div>
        <div ref={plane3} className="plane">
            <img 
              src={Floating3}
              alt='image'
              width={200}
            />
             <img 
              src={Floating5}
              alt='image'
              width={250}
            />
        </div>
        <div className="title">
          <h1>Galerie.</h1>
        </div>
      </main>
    )
  }

  export default Test;
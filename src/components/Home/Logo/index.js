
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.css'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

    // Quickly fade in the background to make sure everything is visible.
    tl.to(bgRef.current, {
        duration: 0.5, // Shortened duration
        opacity: 1,
        ease: "power1.inOut"
    })
    .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 1, // Shortened duration for quicker draw
    })
    .fromTo(solidLogoRef.current, {
        opacity: 0,
        scale: 0.5,
    }, {
        opacity: 1,
        scale: 1,
        duration: 0.5, // Quicker pop-up effect
        ease: "back.out(1.7)", // Adding a 'back' ease for a slight overshoot which makes it more dynamic
        delay: 0.2, // Short delay after drawing SVG
    });

}, []);



  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          
        </g>
      </svg>
    </div>
  )
}

export default Logo

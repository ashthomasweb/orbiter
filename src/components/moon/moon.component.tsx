import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../global/GlobalState'
import './moon.styles.css'


function Moon(props: any) {

    const { state: {}, globalDispatch} = useContext(GlobalContext)
  
    const orbiter1Ref: any = useRef(null)
    const orbiterWrapperRef: any = useRef(null)
  
    const [top, setTop]: any = useState(null)
    const [left, setLeft]: any = useState(null)
  
    let position = {
      top: top,
      left: left,
      width: `${props.size}em`,
      height: `${props.size}em`,
      backgroundImage: `radial-gradient(
        circle at top, ${props.color}, 50%, #000
      )`
    }
    
    let orbitParams = {
      transform: `translate(${props.center[0]},${props.center[1]}) rotateX(90deg) rotateY(${props.angle}deg)`,
      width: `${props.distance}px`,
      height: `${props.distance}px`,
    }
    
    let trackerParams = {
      width: `${props.distance}px`,
      height: `${props.distance}px`,
      // top: `${props.distance}px`,
      animation: `moon-rotate-orbit ${props.rate}s linear infinite`
    }
  
    useEffect(() => {
      function coordLogger() {
        let coords = orbiter1Ref.current.getBoundingClientRect()
        let wrapperCoords = {
          x: orbiterWrapperRef.current.getBoundingClientRect().x,
          y: orbiterWrapperRef.current.getBoundingClientRect().y,
        }
        console.log(coords.x - wrapperCoords.x, coords.y - wrapperCoords.y)
        setTop(coords.y - wrapperCoords.y)
        setLeft(coords.x - wrapperCoords.x)
      }
      const interval = setInterval(coordLogger, 1)
      return function cleanUp() {
        clearInterval(interval)
      }
    }, [])
  
    return (
      <div className='moon-orbit-wrapper' style={orbitParams} ref={orbiterWrapperRef}>
        <div className='moon' style={position}></div>
       
        <div id='moon-tracker-orbit' style={trackerParams}>
          <div
            className='moon-orbit-locator'
            ref={orbiter1Ref}
            ></div>
        </div>
      </div>
    )
  }

  export default Moon
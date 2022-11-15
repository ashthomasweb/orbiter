import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from './global/GlobalState'
import './App.css'

function Orbiter(props: any) {

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
    transform: `translate(-50%, -50%) rotateX(90deg) rotateY(${props.angle}deg)`,
    width: `${props.distance}px`,
    height: `${props.distance}px`,
  }
  
  let trackerParams = {
    width: `${props.distance}px`,
    height: `${props.distance}px`,
    top: `${props.distance}px`,
    animation: `rotate-orbit ${props.rate}s linear infinite`
  }

  useEffect(() => {
    function coordLogger() {
      let coords = orbiter1Ref.current.getBoundingClientRect()
      let wrapperCoords = {
        x: orbiterWrapperRef.current.getBoundingClientRect().x,
        y: orbiterWrapperRef.current.getBoundingClientRect().y,
      }
      // console.log(coords.x - wrapperCoords.x, coords.y - wrapperCoords.y)
      setTop(coords.y - wrapperCoords.y)
      setLeft(coords.x - wrapperCoords.x)
    }
    const interval = setInterval(coordLogger, 1)
    return function cleanUp() {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='orbit-wrapper' style={orbitParams} ref={orbiterWrapperRef}>
      <div className='planet' style={position}></div>
      <div id='inner-orbit'>
        <div
          className='inner-orbit-circles'
          ></div>
      </div>
      <div id='tracker-orbit' style={trackerParams}>
        <div
          className='tracker-orbit'
          ref={orbiter1Ref}
          id='orbiter-1'></div>
      </div>
      {/* <Orbiter angle={60} rate={7} /> */}
    </div>
  )
}

function App() {
  const { state: {}, globalDispatch} = useContext(GlobalContext)

  return (
    <div className='parent'>
      <div className='scene'>
        <div className='sphere'></div>
        {/* <div className='disc-2'></div> */}
        <div className='disc'></div>
        <Orbiter color={'lightblue'} distance={170} size={.2} angle={60} rate={5}/>
        <Orbiter color={'lightgreen'} distance={320} size={.5} angle={22} rate={20}/>
        {/* <Orbiter color={'pink'} distance={360} size={1} angle={-35} rate={20}/> */}
        <Orbiter color={'aqua'} distance={630} size={.9} angle={25} rate={14}/>
        <Orbiter color={'grey'} distance={840} size={.5} angle={15} rate={37}/>
        <Orbiter color={'darkgrey'} distance={690} size={.8} angle={5} rate={49}/>
        <Orbiter color={'blue'} distance={630} size={1.7} angle={-5} rate={19}/>
        <Orbiter color={'red'} distance={510} size={.6} angle={-45} rate={9}/>
        <Orbiter color={'orange'} distance={970} size={.5} angle={-35} rate={10}/>
        <Orbiter color={'yellow'} distance={598} size={.4} angle={-52} rate={70}/>
        <Orbiter color={'cyan'} distance={529} size={1.3} angle={5} rate={50}/>



      </div>
    </div>
  )
}

export default App

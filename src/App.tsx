import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from './global/GlobalState'
import './App.css'

function Backdrop(props: any) {
  return (
    <div className='backdrop'></div>
  )
}

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
      <Backdrop />
      <div className='scene'>
        <div className='sphere'></div>

        <div className='disc'></div>
        {/* MERCURY */}
        <Orbiter color={'orange'} distance={285} size={.2} angle={7.0} rate={7}/>
        {/* VENUS */}
        <Orbiter color={'yellowgreen'} distance={360} size={.45} angle={3.4} rate={12}/>
        {/* EARTH */}
        <Orbiter color={'blue'} distance={470} size={.5} angle={0} rate={19}>
        {/* <div className='parent'>
        <div className='scene'>
        <Orbiter color={'white'} distance={200} size={.2} angle={40} rate={19} />
        </div>
        </div> */}
          </Orbiter>
        {/* MARS */}
        <Orbiter color={'red'} distance={640} size={.25} angle={1.8} rate={37}/>
        {/* JUPITER */}
        <Orbiter color={'darkred'} distance={790} size={2.65} angle={1.3} rate={49}/>
        {/* SATURN */}
        <Orbiter color={'yellow'} distance={1030} size={2.4} angle={2.5} rate={90}/>
        {/* URANUS */}
        <Orbiter color={'slategrey'} distance={1110} size={2.04} angle={0.8} rate={60}/>
        {/* NEPTUNE */}
        <Orbiter color={'lightblue'} distance={1270} size={1.98} angle={1.8} rate={80}/>
        {/* PLUTO */}
        <Orbiter color={'brown'} distance={2598} size={.1} angle={17.2} rate={40}/>

      </div>
    </div>
  )
}

export default App

import { useContext } from 'react'
import { GlobalContext } from './global/GlobalState'
import Planet from './components/planet/planet.component'
import './App.css'

function Backdrop(props: any) {
  return (
    <div className='backdrop'></div>
  )
}


function App() {
  const { state: {}, globalDispatch} = useContext(GlobalContext)

  return (
    <div className='parent'>
      <Backdrop />
      <div className='scene'>
        <div className='sun'></div>

        <div className='disc'></div>
        {/* MERCURY */}
        <Planet color={'orange'} distance={285} size={.2} angle={7.0} rate={7} numOfMoon={0}/>
        {/* VENUS */}
        <Planet color={'yellowgreen'} distance={360} size={.45} angle={3.4} rate={12} numOfMoon={0}/>
        {/* EARTH */}
        <Planet color={'blue'} distance={570} size={1} angle={0} rate={40}  numOfMoon={1}/>

        {/* MARS */}
        <Planet color={'red'} distance={640} size={.25} angle={1.8} rate={37} numOfMoon={0}/>
        {/* JUPITER */}
        <Planet color={'darkred'} distance={790} size={2.65} angle={1.3} rate={49} numOfMoon={0}/>
        {/* SATURN */}
        <Planet color={'yellow'} distance={1030} size={2.4} angle={2.5} rate={90} numOfMoon={0}/>
        {/* URANUS */}
        {/* <Orbiter color={'slategrey'} distance={1110} size={2.04} angle={0.8} rate={60} numOfMoon={0}/> */}
        {/* NEPTUNE */}
        {/* <Orbiter color={'lightblue'} distance={1270} size={1.98} angle={1.8} rate={80} numOfMoon={0}/> */}
        {/* PLUTO */}
        {/* <Orbiter color={'brown'} distance={2598} size={.1} angle={17.2} rate={40} numOfMoon={0}/> */}

      </div>
    </div>
  )
}

export default App

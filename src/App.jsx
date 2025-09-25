import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

const PlayerPromise = fetch('/player.json').then( res => res.json() );

function App() {

  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(6000000000);
  const [perchasedPlayers, setPerchasedPlayers] = useState([]);

  return (
    <>
      <Navbar balance={balance}></Navbar>

      <Banner></Banner>

      <div className="toggle_section w-[85%] mx-auto flex justify-between items-center my-5 sora">
        <h2 className='text-2xl font-bold'>{toggle? "Avaiable Players" : `Selected Players (${perchasedPlayers.length}/6)`}</h2>
        <div className="buttons">
          <button onClick={() => setToggle(true)} className={`btn rounded-l-xl rounded-r-none border border-gray-300 border-r-0 text-gray-500 font-light ${toggle && "btn-active"} `} >Available</button>
          <button onClick={() => setToggle(false)} className={`btn rounded-r-xl rounded-l-none border border-gray-300 border-l-0 text-gray-500 font-light ${!toggle && "btn-active"} `} >Selected <span>({perchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggle===true? 
          <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner text-primary"></span></div>}>
            <AvailablePlayers PlayerPromise={PlayerPromise} balance={balance} setBalance={setBalance} perchasedPlayers={perchasedPlayers} setPerchasedPlayers={setPerchasedPlayers}></AvailablePlayers>
          </Suspense> 
          : <SelectedPlayers perchasedPlayers={perchasedPlayers} setPerchasedPlayers={setPerchasedPlayers} balance={balance} setBalance={setBalance} setToggle={setToggle}></SelectedPlayers>
      }
      
      <Footer></Footer>

      <ToastContainer />

    </>
  )
}

export default App

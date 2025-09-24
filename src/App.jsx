import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Banner from './components/Banner/Banner';

const PlayerPromise = fetch('/player.json').then( res => res.json() );

function App() {


  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <AvailablePlayers PlayerPromise={PlayerPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}


    </>
  )
}

export default App

import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({perchasedPlayers, setPerchasedPlayers, balance, setBalance, setToggle}) => {

    const deleteAction = (perchasedPlayer) => {
        const afterDelete = perchasedPlayers.filter( singlePlayer => singlePlayer !== perchasedPlayer);
        setPerchasedPlayers( afterDelete );

        const playerPrice = parseInt(perchasedPlayer.bplPrice, 10);
        setBalance( balance + playerPrice );
        console.log(balance, playerPrice)
    }

    return (
        <div className='w-[85%] mx-auto'>
            {
                perchasedPlayers.map(perchasedPlayer => <SelectedCard perchasedPlayer={perchasedPlayer} setPerchasedPlayers={setPerchasedPlayers} deleteAction={deleteAction}></SelectedCard>)
            }
            
          <button onClick={() => setToggle(true)} className='btn rounded-md outline outline-offset-6 outline-violet-600 bg-[#E7FE29] font-bold mx-1 my-8' >Add More Player</button>

        </div>
    );
};

export default SelectedPlayers;
import React, { use } from 'react';
import Card from '../Card/Card';

const AvailablePlayers = ({PlayerPromise, balance, setBalance, perchasedPlayers, setPerchasedPlayers}) => {

    const Players = use(PlayerPromise);
    // console.log(Players)

    return (
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                Players.map( player => <Card key={player.id} player={player} balance={balance} setBalance={setBalance} perchasedPlayers={perchasedPlayers} setPerchasedPlayers={setPerchasedPlayers}></Card> )
            }
            
        </div>
    );
};

export default AvailablePlayers;
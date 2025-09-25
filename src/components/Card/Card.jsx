import React, { useState } from 'react';
import titleIcon from '../../assets/Group.png'
import flagIcon from '../../assets/Vector.png'
import { toast } from 'react-toastify';

const Card = ({player, balance, setBalance, perchasedPlayers, setPerchasedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false);

    const btn_action = (player) => {
        
        if( perchasedPlayers.length === 6) {
            toast("Maximum Player Limit reached, Remove One or More Player to Add Another !!!");
            return;
        }

        const playerPrice = parseInt(player.bplPrice, 10);

        if(balance<playerPrice){
            toast("Insufficient Balance!");
            return;
        }

        setIsSelected(true), 
        setBalance( balance - playerPrice );

        const newPurchasedPlayers = [...perchasedPlayers, player];
        setPerchasedPlayers(newPurchasedPlayers);

        toast("Player selected!");
    }

    return (
        <div className='sora'>
            <div className="card bg-base-100 w-auto shadow-sm border border-[#D9D9D9] rounded-xl">
                <figure className='p-5'>
                    <img className='rounded-xl h-[180px] object-cover' src={player.playerImage} alt="Shoes" />
                </figure>
                <div className="card-body pt-0">
                    <h2 className="card-title font-semibold text-base">
                        <img className='w-[20px] mr-1' src={titleIcon} alt="" />
                        {player.playerName}
                    </h2>
                    <div className='flex justify-between items-center my-1 border-b border-[#D9D9D9] pb-3'>
                        <div className="flex gap-2 text-gray-500 text-xs">
                            <img className='h-[15px] ' src={flagIcon} alt="" />
                            {player.playerCountry}
                        </div>
                        <div className="badge bg-[#F3F3F3] text-xs py-3">{player.playingRole}</div>
                    </div>
                    <div className="card-bottom w-full flex flex-col gap-3">
                        <div className="row flex justify-between">
                            <span className='font-semibold'>Rating</span> 
                            <span className='text-gray-500'>{player.rating}</span> 
                        </div>
                        <div className="row flex justify-between">
                            <span className='font-semibold'> {player.battingStyle} </span>
                            <span className='text-gray-500'> {player.bowlingStyle} </span>
                        </div>
                        <div className="row flex justify-between items-center">
                            <div className="price">
                                <span className='font-semibold'>Price: $</span>
                                <span className='font-semibold'> {player.bplPrice} </span>
                            </div>
                            <div className="actions">
                                <button disabled={isSelected} onClick={()=>{btn_action(player)}} className="btn btn-outline border-gray-200 h-8 text-xs font-light"> {isSelected? "Selected" : "Choose Player"} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
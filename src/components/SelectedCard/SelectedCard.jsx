import React from 'react';
import binImg from '../../assets/bin.png'

const SelectedCard = ({perchasedPlayer, deleteAction}) => {
    // console.log(perchasedPlayer)
    

    return (
        <div className='w-full flex justify-between items-center border border-gray-300 rounded-2xl p-5 my-5 sora'>
            <div className="left flex">
                <img className='h-[70px] w-[70px] object-cover rounded-2xl' src={perchasedPlayer.playerImage} alt="" />
                <div className="text flex flex-col justify-center px-5" >
                    <h3 className='text-xl font-bold'>{perchasedPlayer.playerName}</h3>
                    <p className='text-sm font-light text-gray-500'>{perchasedPlayer.battingStyle}</p>
                </div>
            </div>
            <div className="right">
                <button onClick={ () => {deleteAction(perchasedPlayer)} } className='hover:cursor-pointer'><img className='h-[20px]' src={binImg} alt="" /></button>                
            </div>
        </div>
    );
};

export default SelectedCard;
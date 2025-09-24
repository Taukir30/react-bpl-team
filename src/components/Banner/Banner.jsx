import React from 'react';
import BgImg from '../../assets/bg-shadow.png'
import './Banner.css'
import BannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='banner w-[85%] mx-auto my-3 rounded-2xl bg-[#131313] sora' >
            <div className='w-full min-h-[200px] rounded-2xl flex flex-col items-center gap-5 p-15 bg-center bg-cover' style={{ backgroundImage: `url(${BgImg})`}}>
                <img src={BannerImg} alt="" />
                <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400 text-xl inter'>Beyond Boundaries Beyond Limits</p>
                <a className='btn bg-[#E7FE29]' href="#">Claim Free Credit</a>
            </div>
        </div>
    );
};

export default Banner;
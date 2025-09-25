import React from 'react';
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='min-h-[200px] bg-[#06091A] mt-[200px] flex flex-col gap-1 justify-between items-center'>
            <div className="logo my-5">
                <img className='h-[100px]' src={footerLogo} alt="" />
            </div>
            <div className="bottom ">
                <h3 className='text-gray-300  text-sm text-center'>@2024 Your Company All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import LogoImage from '../../assets/images/anbunetLogo.jpg'

const Logo = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"w-40 h-40"}>
                <img src={LogoImage} className={"w-full rounded-full"} alt="logo"/>
            </div>
            <h1 className={"my-4 text-5xl text-blue-950 font-mono uppercase font-bold italic"}>Anbunet</h1>
        </div>
    );
};

export default Logo;
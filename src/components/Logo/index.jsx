import React from 'react'
import LogoImage from '../../assets/images/AnbunetLogo.jpg'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={`flex flex-col items-center ${styles.root}`}>
            <div className={"w-40 h-40"}>
                <img src={LogoImage} className={"w-full h-full rounded-full object-cover"} alt="logo"/>
            </div>
            <h1 className={"my-4 text-4xl text-purple-extra-light uppercase font-bold"}>Anbunet</h1>
        </div>
    )
}

export default Logo
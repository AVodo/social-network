import React from "react";
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
            <div className={style.item}><NavLink to='/profile'>Profile</NavLink></div>
            <div className={style.item}><NavLink to='/dialogs'>Messages</NavLink></div>
            <div className={style.item}><NavLink to='/news'>News</NavLink></div>
            <div className={style.item}><NavLink to='/music'>Music</NavLink></div>
            <div className={style.item}><NavLink to='/settings'>Setings</NavLink></div>
        </nav>
    )
}

export default Navbar;
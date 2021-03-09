import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            <div className={style.item}><a>Profile</a></div>
            <div className={style.item}><a>Messages</a></div>
            <div className={style.item}><a>News</a></div>
            <div className={style.item}><a>Music</a></div>
            <div className={style.item}><a>Setings</a></div>
        </nav>
    )
}

export default Navbar;
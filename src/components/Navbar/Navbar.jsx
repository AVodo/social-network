import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>

            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>

            <FriendsBlock state={props.state} />

        </nav>
    );
}

export default Navbar;
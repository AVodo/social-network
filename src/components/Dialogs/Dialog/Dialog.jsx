import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog
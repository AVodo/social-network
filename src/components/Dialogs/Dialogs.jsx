import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: '1', name: 'Andr'},
        {id: '2', name: 'Vova'},
        {id: '3', name: 'Kate'},
        {id: '4', name: 'Maxi'}
    ]

    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>

                <Dialog name ={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name ={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name ={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name ={dialogsData[3].name} id={dialogsData[3].id} />

            </div>

            <div className={style.messages}>

                <Message text='Hi'/>
                <Message text='Hello'/>
                <Message text='Loh'/>

            </div>
        </div>
    )
}

export default Dialogs
import React from "react";
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogsWindow}>
            <div className={style.dialogItems}>
                <div className={style.dialog}>Vova</div>
                <div className={style.dialog}>Andr</div>
                <div className={style.dialog}>Kate</div>
                <div className={style.dialog}>Max</div>
            </div>

            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>hello</div>
                <div className={style.message}>loh</div>
            </div>
        </div>
    )
}

export default Dialogs
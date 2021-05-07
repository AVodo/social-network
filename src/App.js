import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderComponent";


const App = (props) => {
    return (
        <div className='app-wrapper'>

            <HeaderComponent/>
            <Navbar/>

            <div className="app-wrapper-content">

                <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />

                <Route path='/dialogs' render={() => <DialogsContainer/>} />

                <Route path='/news' render={() => <NewsContainer/>} />

                <Route path='/users' render={() => <UsersContainer/>} />

                <Route path='/music' render={() => <Music/>}/>

                <Route path='/settings' render={() => <Settings/>}/>

            </div>

        </div>
    );
}

export default App;
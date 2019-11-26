import React from 'react'
import MainMenu from '../Shared/TopNav/MainMenu'
import { Switch, Route } from "react-router-dom";
import Main from './Main';
import LoginForm from '../Login/LoginForm';
import ProfileMain from '../Profile/ProfileMain';
import PublicStorage from '../DocumentStorage/PublicStorage';
class Homepage extends React.Component {
    render() {
        return (
            <div >
                <MainMenu />
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/profile">
                        <ProfileMain/>
                    </Route>
                    <Route path="/publicStorage">
                        <PublicStorage/>
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>

                </Switch>
            </div>
        )
    }
}

export default Homepage
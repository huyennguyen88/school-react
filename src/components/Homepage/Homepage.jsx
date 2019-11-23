import React from 'react'
import MainMenu from '../Shared/TopNav/MainMenu'
import { Switch, Route } from "react-router-dom";
import Main from './Main';
import LoginForm from '../Login/LoginForm';
class Homepage extends React.Component {
    render() {
        return (
            <div className="container">
                <MainMenu />
                <Switch>
                    <Route path="/login">
                        <LoginForm />
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
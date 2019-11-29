import React from 'react'
import MainMenu from '../Shared/TopNav/MainMenu'
import Main from './Main';
import LoginForm from '../Login/LoginForm';
import ProfileMain from '../Profile/ProfileMain';
import PublicStorage from '../DocumentStorage/PublicStorage';
import * as session from './../../actions/session'
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux'
class Homepage extends React.Component {
    async componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        await this.props.currentUser(token);
    }
    render() {
        return (
            <div>
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
const mapStateToProps = (state)=>{

    return{
        user: state.session,
        role: state.role
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        currentUser: (token)=>{
            return dispatch(session.profileApi(token))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage)
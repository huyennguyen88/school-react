import React from 'react'
import MainMenu from '../Shared/TopNav/MainMenu'
import Main from './Main';
import LoginForm from '../Login/LoginForm';
import ProfileMain from '../Profile/ProfileMain';
import LoggedMenu from '../LoggedHome/LoggedMenu';
import Footer from '../Shared/Footer/Footer'
import ListClass from '../Teacher/ListClass';
import ClassDetail from '../Teacher/ClassDetail'
import EditProfile from '../Profile/EditProfile'
import ChatMain from '../Chat/ChatMain'
import * as actions from './../../actions/index'
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux'
import Menu from '../Shared/Menu/Menu';
class Homepage extends React.Component {
    async componentDidMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        await this.props.currentUser(token);
    }
    render() {
        return (
            <div >
                <MainMenu />
                <Switch>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/chat">
                        <ChatMain/>
                    </Route>
                    <Route path="/profile/edit">
                        <EditProfile/>
                    </Route>
                    <Route path="/profile">
                        <ProfileMain/>
                    </Route>
                    <Route path="/publicStorage">
                        {/* <PublicStorage/> */}
                    </Route>
                    <Route path="/logged">
                        <LoggedMenu/>
                    </Route>
                    <Route path="/listclass/classdetail">
                        <ClassDetail />
                    </Route>
                    <Route path="/listclass">
                        <ListClass />
                    </Route>
                    <Route path="/menu">
                        <Menu/>
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
                <Footer/>
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
            return dispatch(actions.profileApi(token))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage)
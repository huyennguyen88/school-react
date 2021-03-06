import React from 'react'
import MainMenu from '../Shared/TopNav/MainMenu'
import Main from './Main';
import LoginForm from '../Login/LoginForm';
import ProfileMain from '../Profile/ProfileMain';
import PublicStorage from '../DocumentStorage/PublicStorage';
import LoggedMenu from '../LoggedHome/LoggedMenu';
import Footer from '../Shared/Footer/Footer'
import ListClass from '../Teacher/ListClass';
import ClassDetail from '../Teacher/ClassDetail'
import EditProfile from '../Profile/EditProfile'
import ChatMain from '../Chat/ChatMain'
import * as actions from './../../actions/index'
import {connect} from 'react-redux'
import ParentPage from '../Parent/ParentPage';
import StudentPage from '../Student/StudentPage';
import NotFound from '../Shared/Error/NotFound'
// import Header from '../Shared/TopNav/Header';
import { Switch, Route } from "react-router-dom";
import Menu from '../Shared/Menu/Menu';
import ChildrenPage from '../Parent/ChildrenPage';
import AboutTeam from '../Shared/About/AboutTeam';
class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.props.currentTeacher();
    }
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
                        <PublicStorage/>
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
                    <Route path="/parent">
                        <ParentPage/>
                    </Route>
                    <Route path="/student">
                        <StudentPage/>
                    </Route>
                    <Route path="/children">
                        <ChildrenPage/>
                    </Route>
                    <Route path="/notfound">
                        <NotFound/>
                    </Route>
                    <Route path="/about">
                        <AboutTeam/>
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
        },
        currentTeacher: ()=>{
            return dispatch(actions.getTeacherNow())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Homepage)
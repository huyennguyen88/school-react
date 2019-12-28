import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from './../../actions/index'
import {withRouter} from 'react-router-dom'
import {toast} from'react-toastify'
class StudentDSLopItem extends Component {
    constructor(props){
        super(props)
    }
    notify = () => {
        toast.success("tạo room thành công",{
            position: toast.POSITION.TOP_RIGHT
        });
    }
    async componentDidMount(){
        var token = JSON.parse(localStorage.getItem('token'))
        // await this.props.haveFriend(token,this.props.student.mssv)

    }
    onCreateRoomChat =  async ()=>{
        var token = JSON.parse(localStorage.getItem('token'))
        await this.props.createRoomChat(token, this.props.student.mssv)
        this.notify();
        this.props.history.push('/chat')
    }
    render() {
        var {student,checkHaveFriend} = this.props
        return (
            <tr>
                <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>{student.mssv}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.parent}</td>
                <th>
                    {
                        student.name === this.props.user.name? 
                         // dieu kien sai, check token 
                        ""
                        :
                        <div>
                            <button onClick={this.onCreateRoomChat} type="button" className="btn btn-success">Tạo room chat</button>
                        </div>
                    }
                </th>
            </tr>
        );
    }
}
const mapStateToProps= (state)=>{
    console.log(state.checkHaveFriend)
    return {
        user : state.session,
        checkHaveFriend: state.checkHaveFriend
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createRoomChat : (token, id_student)=>{
            return dispatch(actions.createRoom1vs1Api(token, id_student))
        },
        haveFriend: (token,id_student)=>{
            return dispatch(actions.havedFriendApi(token,id_student))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(StudentDSLopItem))
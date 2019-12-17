import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import * as actions from './../../actions/index'
class Receive extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { mess, personInRoom } = this.props;
        var time = new Date(mess.created_at);
        var nameSend = '';
        if (!isEmpty(personInRoom)) {
            var index = personInRoom.findIndex((p) => {
                return mess.user_token === p.authentication_token
            })
        }
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var timeReceive = time.getHours() + ":" + time.getMinutes() + " | " + monthNames[time.getMonth()] + " " + time.getDate()
        return (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <h6>{personInRoom[index]? personInRoom[index].name : ""}</h6>
                        <p>{mess.content}</p>
                        <span className="time_date">{timeReceive}</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.session,
        personInRoom: state.personInRoom
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNameSend: (user_token) => {
            dispatch(actions.nameSendApi(user_token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Receive)
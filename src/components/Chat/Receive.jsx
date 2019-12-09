import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from './../../actions/index'
class Receive extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { mess } = this.props
        var time = new Date(mess.created_at)
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var timeReceive = time.getHours() + ":" + time.getMinutes() + " | " + monthNames[time.getMonth()] + " " + time.getDate()
        return (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
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
        user: state.session
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(null, mapStateToProps)(Receive)
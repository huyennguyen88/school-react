import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from './../../actions/index'
class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="msg_history">
                <div className="msg_history">
                    <div className="incoming_msg">
                        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                        <div className="received_msg">
                            <div className="received_withd_msg">
                                <p>Test which is a new approach to have all solutions</p>
                                <span className="time_date"> 11:01 AM    |    June 9</span></div>
                        </div>
                    </div>
                    <div className="outgoing_msg">
                        <div className="sent_msg">
                            <p>Test which is a new approach to have all solutions</p>
                            <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.session
    }
}
const mapDispatchToProps = (dispatch) => {

}
export default connect(null, mapStateToProps)(Message)
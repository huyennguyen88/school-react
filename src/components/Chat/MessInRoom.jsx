import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message';
// import * as actions from './../../actions/index'
class Room extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="mesgs">
                <Message/>
                <div className="type_msg">
                    <div className="input_msg_write">
                        <input type="text" className="write_msg" placeholder="Type a message" />
                        <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        messes: state.room
    }
}
const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, null)(Room)
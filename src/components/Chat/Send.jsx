import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from './../../actions/index'
class Send extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { mess } = this.props
        var time = new Date(mess.created_at)
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var timeSend = time.getHours() + ":" + time.getMinutes() + " | " + monthNames[time.getMonth()] + " " + time.getDate()
        return (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{mess.content}</p>
                    <span className="time_date">{timeSend}</span>
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
export default connect(null, mapStateToProps)(Send)
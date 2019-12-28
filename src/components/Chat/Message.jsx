import React, { Component } from 'react'
import { connect } from 'react-redux'
import Send from './Send';
import Receive from './Receive';
class Message extends Component {
    render() {
        var { mess, user } = this.props
        return (
            // <div className="outgoing_msg">
            <div className="mess-store">
                {
                    user.authentication_token === mess.user_token ?
                        <Send mess={mess} />
                        :
                        <Receive mess={mess} />
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(Message)
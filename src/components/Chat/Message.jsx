import React, { Component } from 'react'
import { connect } from 'react-redux'
import Send from './Send';
import Receive from './Receive';
// import * as actions from './../../actions/index'
class Message extends Component {
    constructor(props) {
        super(props);
    }
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

}
export default connect(mapStateToProps, null)(Message)
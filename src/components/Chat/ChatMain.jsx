import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListRoom from './ListRoom'
import * as actions from './../../actions/index'
import MessInRoom from './MessInRoom'
class ChatMain extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3 className=" text-center mt-5">Messaging</h3>
                    <div className="messaging">
                        <div className="inbox_msg">
                            <ListRoom/>
                            <MessInRoom />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        user: state.session,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadListRoom: (token) => {
            return dispatch(actions.listRoomApi(token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatMain)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListRoom from './ListRoom'
import * as actions from './../../actions/index'
import { isEmpty } from 'lodash'
import MessInRoom from './MessInRoom'
import Room from './Room'
import Cable from 'actioncable'
class ChatMain extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        // let token = JSON.parse(localStorage.getItem('token'))
        // if (!isEmpty(token)) {
        //     await this.props.loadListRoom(token)
        // }
    }
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
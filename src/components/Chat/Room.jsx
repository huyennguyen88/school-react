import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import * as actions from './../../actions/index'
class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyRoom: null
        }
    }
    activeChat = async () => {
        var { keyRoom } = this.props
        this.props.callback(keyRoom)
        this.setState({
            keyRoom: keyRoom
        })
        await this.props.loadMessInRoom(this.props.room.id)
    }
    render() {
        var { room, user, active, lastMess } = this.props
        var lastMessInRoom = ''
        var nameRoomArr = room.name.split(', ');
        var nameRoom = '';
        if (nameRoomArr.length > 2) {
            nameRoom = room.name
        }
        else {
            if (user.name === nameRoomArr[0]) {
                nameRoom = nameRoomArr[1]
            }
            else if (user.name !== nameRoom[1]) {
                nameRoom = nameRoomArr[0]
            }
        }
        // else {
        //     nameRoom = room.name
        // }
        if (!isEmpty(lastMess)) {

            lastMessInRoom = lastMess
        }
        return (
            <div className={active} onClick={this.activeChat}>
                <div className="chat_list">
                    <div className="chat_people">
                        <div className="chat_img">
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                        </div>
                        <div className="chat_ib">
                            <h5>{nameRoom} <span className="chat_date">Dec 25</span></h5>
                            <p>{lastMessInRoom}</p>
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
        loadMessInRoom: (id_room) => {
            return dispatch(actions.getMessApi(id_room))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Room)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import Message from './Message';
import * as actions from './../../actions/index'
class MessInRoom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { messes } = this.props
        var messesInRoom = messes.map((mess, index) => {
            return (
                <Message key={index} mess={mess} />
            )
        })
        console.log(this.props)
        return (
            <div>
                <div style={style.bgName}>
                        <p style={style.txtName}>{  }</p>
                    </div>
                <div className="mesgs">
                    <div className="msg_history">
                        {messesInRoom}
                    </div>
                    {
                        isEmpty(messesInRoom)
                            ? ""
                            :
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Type a message" />
                                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}
const style = {
    bgName: {
        backgroundColor: "#05728f",
        borderRadius: "5px 5px",
        float: "left",
        width: "60%",
        height: "3em"
    },
    txtName: {
        color: "white",
        textAlign: "center"
    }
}
const mapStateToProps = (state) => {
    return {
        messes: state.room,
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
export default connect(mapStateToProps, mapDispatchToProps)(MessInRoom)
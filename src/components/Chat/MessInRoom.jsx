import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Message';
// import createSocket from './ChatSocket'
import Cable from "actioncable";
import { WS } from "../../constants/Config";
import * as actions from './../../actions/index'
class MessInRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMessage: '',
            token_room: '',
            token: '',
        }
    }
    componentDidMount() {
        // this.socket  = new createSocket()
        this.createSocket();
    }
    notify = () => toast("Wow so easy !");
    createSocket() {
        var cable = Cable.createConsumer(WS + "rooms");
        this.rooms = cable.subscriptions.create(
            {
                channel: "RoomChannel"
            },
            {
                connected: () => {
                    console.log("connected")
                },
                disconnected: () => {
                    console.log('disconnected')
                },
                received: data => {
                    this.props.sendMess(data)
                    var token = JSON.parse(localStorage.getItem('token'));
                    console.log(token, "    ", data.user_token)
                    if (token !== data.user_token) {
                        this.notify()
                    }
                },
                create: function (token, token_room, chatContent) {
                    this.perform("create", {
                        token_room: token_room,
                        content: chatContent,
                        token_user: token
                    });
                }
            }
        );
    }
    componentWillReceiveProps(nextProps) {
        if (isEmpty(nextProps.messes)) {
            this.setState({
                token_room: JSON.parse(localStorage.getItem('token_room')),
                token: JSON.parse(localStorage.getItem('token'))
            })
        }
    }
    componentWillUnmount() {
        this.props.clearMess()
        this.rooms.unsubscribe()
    }
    onChange = (e) => {
        this.setState({
            currentMessage: e.target.value
        })
    }
    onSubmit = async (e) => {
        var message = this.state
        // console.log(this.socket.rooms)
        // this.socket.rooms.create(message.token,message.token_room,message.currentMessage)
        this.rooms.create(message.token, message.token_room, message.currentMessage)
        e.preventDefault()
    }
    render() {
        var { messes } = this.props
        var messesInRoom = messes.map((mess, index) => {
            return (
                <Message key={index} mess={mess} />
            )
        })
        return (
            <div>
                <div className="mesgs">
                    
                    <div className="msg_history" id="mess_history">
                        {messesInRoom}
                    </div>
                    {
                        isEmpty(messesInRoom)
                            ? ""
                            :
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input
                                        type="text"
                                        className="write_msg"
                                        placeholder="Type a message"
                                        onKeyUp={this.onChange}
                                    />
                                    <button
                                        className="msg_send_btn"
                                        type="button"
                                        onClick={this.onSubmit}
                                    >
                                        <i className="fa fa-paper-plane-o" aria-hidden="true" />
                                    </button>
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
        // loadMessInRoom: (id_room) => {
        //     return dispatch(actions.getMessApi(id_room))
        // }
        clearMess: () => {
            return dispatch(actions.clearMess())
        },
        sendMess: (mess) => {
            return dispatch(actions.sendMess(mess))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessInRoom)
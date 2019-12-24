import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Message';
// import createSocket from './ChatSocket'
import Cable from "actioncable";
import { WS } from "../../constants/Config";
import * as actions from './../../actions/index'
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from 'glamor';
const ROOT_CSS = css({
    height: 600,
  });


toast.configure()
class MessInRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMessage: '',
            token_room: '',
            token: '',
        }
    }
    handleInputEnter = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit(e);
        }
    }

    componentDidMount() {
        // this.socket  = new createSocket()
        this.createSocket();
    }
    notify = (message) => {
        toast.info(message.personSend + ": " + message.content, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
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
                    if (token !== data.user_token) {
                        this.notify(data);
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
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit = async (e) => {
        var message = this.state
        // console.log(this.socket.rooms)
        // this.socket.rooms.create(message.token,message.token_room,message.currentMessage)
        this.rooms.create(message.token, message.token_room, message.currentMessage)
        document.getElementById('currentMessage').value = ''
        e.preventDefault()
    }
    render() {
        var { messes} = this.props
        var messesInRoom = messes.map((mess, index) => {
            return (
                <Message key={index} mess={mess} />
            )
        })
        return (
            <div>
                <div className="mesgs">
                    <ScrollToBottom className={ROOT_CSS}>
                       
                            {messesInRoom}
                       
                    </ScrollToBottom>
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
                                        name="currentMessage"
                                        id="currentMessage"
                                        onKeyUp={this.onChange}
                                        onKeyPress={this.handleInputEnter}
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
const mapStateToProps = (state) => {
    return {
        messes: state.room,
        rooms: state.rooms,
        user: state.session,
        nameSend: state.nameSend,
        personInRoom: state.personInRoom
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
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessInRoom)
import React, { Component } from "react";
import Cable from "actioncable";
import { WS } from "../../constants/Config";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class createSocket extends React.Component{
  constructor(props) {
    super(props)
    this.cable = Cable.createConsumer(WS + "rooms");
    this.rooms = this.cable.subscriptions.create(
      {
        channel: "RoomChannel"
      },
      {
        connected: () => {
          console.log("connected");
        },
        received: data => {
          console.log(this.props)
        },
        create: function(token, token_room, chatContent) {
          this.perform("create", {
            token_user: token,
            token_room: token_room,
            content: chatContent
          });
        }
      }
    );
  }
}
const mapStateToProps = (state) => {
  return {
      
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      sendMess: (mess)=>{
        return dispatch(actions.sendMess(mess))
      }
  }
}
connect(null,mapDispatchToProps)(createSocket);
export default createSocket
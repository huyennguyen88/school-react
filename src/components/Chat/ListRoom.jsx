import React, { Component } from 'react'
import { connect } from 'react-redux'
import {isEmpty} from 'lodash'
import Room from './Room';
import * as actions from './../../actions/index'
class ListRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onActive: ""
        }
    }
    async componentDidMount() {
        let token = JSON.parse(localStorage.getItem('token'))
        if (!isEmpty(token)) {
            await this.props.loadListRoom(token)
        }
    }
    render() {
        var { rooms } = this.props
        if (rooms) {
            var listRoom = rooms.map((room,index)=>{
                return(
                    <Room key={index} room={room}/>
                )
            })
        }
        return (
            <div className="inbox_people">
                <div className="headind_srch">
                    <div className="recent_heading">
                        <h4>Recent</h4>
                    </div>
                    <div className="srch_bar">
                        <div className="stylish-input-group">
                            <input type="text" className="search-bar" placeholder="Search" />
                            <span className="input-group-addon">
                                <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="inbox_chat">
                    {listRoom}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        user: state.session
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        loadListRoom: (token) => {
            return dispatch(actions.listRoomApi(token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRoom)
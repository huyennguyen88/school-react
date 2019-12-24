import React, { Component } from 'react'
import { connect } from 'react-redux'
import {isEmpty} from 'lodash'
import Room from './Room';
import * as actions from './../../actions/index'
class ListRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onActive: "",
            activeRoom:null,
            keySearch: '',
        }
    }
    async componentDidMount() {
        let token = JSON.parse(localStorage.getItem('token'))
        if (!isEmpty(token)) {
            await this.props.loadListRoom(token)
        }
    }
    activeRoom = (id) => {
        this.setState({activeRoom:id})
    }
    onChange = (e)=>{
        var target = e.target;
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }
    onSearch = ()=>{
        this.props.onSearch(this.state.keySearch)
    }
    render() {
        var { rooms,lastMessArr,keySearch } = this.props
        if (!isEmpty(rooms)) {
            rooms = rooms.filter((r,i)=>{
                return r.name.toLowerCase().indexOf(keySearch) !== -1
            })
            var listRoom = rooms.map((room,index)=>{
                return(
                    index===this.state.activeRoom?
                    <Room lastMess={lastMessArr[index].content} key={index} keyRoom={index} room={room} callback = {this.activeRoom} active = 'active_chat check'/>
                    :
                    <Room lastMess={lastMessArr[index].content} key={index} keyRoom={index} room={room} callback = {this.activeRoom} active = ''/>
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
                            <input 
                                type="text" 
                                name="keySearch"
                                 className="search-bar" 
                                 placeholder="Search"
                                 onKeyUp={this.onChange} 
                            />
                            <span className="input-group-addon">
                                <button type="button" onClick={this.onSearch}>
                                     <i className="fa fa-search" aria-hidden="true" /> 
                                </button>
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
        user: state.session,
        messes: state.room,
        lastMessArr: state.lastMess,
        keySearch: state.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        loadListRoom: (token) => {
            return dispatch(actions.listRoomApi(token))
        },
        onSearch : (keySearch)=>{
            return dispatch(actions.Search(keySearch))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRoom)
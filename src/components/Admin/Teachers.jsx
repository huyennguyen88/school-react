import React,{Component} from 'react'
import { connect } from "react-redux";
import './User.css'
import * as actions from '../../actions'
import Pagination from "react-js-pagination";
class Teachers extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            list:[],
            activePage:1,
            selectID:null,
        }
    }
    handlePageChange =(pageNumber)=> {
        this.setState({activePage: pageNumber});
    }
    getID = async(item)=>{
        await this.setState({selectID:item.teacher.id})
    }
    componentDidMount()
    {
        this.props.getitem()
    }
    componentWillReceiveProps(props)
    {
        this.setState({
            list:props.teachers
        })
    }
    Listing = () =>{
        if(this.state.list.length == 0)return (
            <>
                <table className="table table-bordered text-center table-striped">
                    <thead>
                        <tr className="text-black ">
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Địa chỉ</th>
                            <th>Mail</th>
                        </tr>
                    </thead>        
                </table>
                <div className = "Loading"></div>
            </>
        )
        else{
            let {list} = this.state
            list = list.slice((this.state.activePage-1)*5,this.state.activePage*5)
            return (
                <>
                    <table className="table table-bordered text-center table-striped">
                        <thead>
                            <tr className="text-black ">
                                <th>ID</th>
                                <th>Họ tên</th>
                                <th>Địa chỉ</th>
                                <th>Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item,index) =>{
                                return(
                                    <tr className="text-black" key={index}
                                        onClick ={()=>this.getID(item)}
                                    >
                                        <th>{item.teacher.id}</th>
                                        <th>{item.user.address}</th>
                                        <th>{item.user.name}</th>
                                        <th>{item.user.email}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={5}
                            totalItemsCount={this.state.list.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                    />
                </>
            )
        } 
    }
    Delete = () =>{

    }
    render(){
        return (
            <div className="container pt-2">
                    <h1>Teachers Manager</h1>
                    <div className = "Task-Manager">
                        <a className="button"><i className ="fas fa-plus"></i>New</a>
                        <a className="button"><i className ="fas fa-pen"></i>Edit</a>
                    </div>
                    <div className = "content">
                        {this.Listing()}
                    </div>
            </div>
        )
    }   
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getitem : async() =>{
            return await dispatch(actions.getTeachersApi())
        },
        createUser: async(data) =>{
            // #params[
            //      :name,
            //      :email,
            //      :password,
            //      :birthday,
            //      :address,
            //      :role]
            return await dispatch(actions.createUserApi(data))
        },
        updateUser: async(data) =>{
            // params[
            //      :name,
            //      :email,
            //      :password,
            //      :birthday,
            //      :address,
            //      :role]
            return await dispatch(actions.updateUserApi(data))
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        teachers : state.admin.teachers
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Teachers)
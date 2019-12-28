import React,{Component} from 'react'
import { connect } from "react-redux";
import './User.css'
import * as actions from '../../actions'
import Pagination from "react-js-pagination";
import Swal from 'sweetalert2'

class Teachers extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            list:[],
            activePage:1,
            selectID:null,
            Modalstyle:{
                display:"none"
            },
            Containerstyle:{
                display:"block"
            },
            id: '',
            name: '',
            email: '',
            birthday: '',
            address: '',
            password: '',
            passwordConfirmation:'',
            role:'3',
            command:null,
        }
    } 
    handlePageChange =(pageNumber)=> {
        this.setState({activePage: pageNumber});
    }
    getID = async(item)=>{
        await this.setState({
            user:{
                id:item.user.id,
                name:item.user.name,
                address:item.user.address,
                email:item.user.email,
                birthday:item.user.birthday
            }
        })
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
                                        <th>{item.student.id}</th>
                                        <th>{item.user.name}</th>
                                        <th>{item.user.address}</th>
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
    Modal = (command) =>{
        let Modal = this.state.Containerstyle
        let Container = this.state.Modalstyle
        this.setState({
            Modalstyle : Modal,
            Containerstyle : Container,
            command:command
        })
    }
    onChange = async (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.value
        await this.setState({
            [name] : value
        })
    }
    onSave = async () =>{
        let user = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            birthday: this.state.birthday,
            address: this.state.address,
            password: this.state.password,
            passwordConfirmation:this.state.passwordConfirmation,
        }
        if(user.password === '' || user.passwordConfirmation === ''){
            if(this.state.command == 'Create')await this.props.createUser(user)
            if(this.state.command == 'Edit')await this.props.updateUser(user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cập nhật thông tin thành công',
                showConfirmButton: false,
                timer: 1000
            })
        }
        else
        {
            if(user.password !== user.passwordConfirmation){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Cập nhật thông tin thất bại',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else{
                if(this.state.command == 'Create')await this.props.createUser(user)
                if(this.state.command == 'Edit')await this.props.updateUser(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cập nhật thông tin thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }
    render(){
        return (
            <>
                <div className="Modal" style={this.state.Modalstyle}>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Họ tên: </label>
                            <div className="col-lg-8">
                                <input onKeyUp={this.onChange} name="name" className="form-control" type="text" defaultValue={this.state.name} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-3 control-label">Email:</label>
                            <div className="col-lg-8">
                                <input onKeyUp={this.onChange} name="email" className="form-control" type="email" defaultValue={this.state.email} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Ngày sinh:</label>
                            <div className="col-md-8">
                                <input onChange={this.onChange} name="birthday" className="form-control" id="birthday" type="date" defaultValue={this.state.birth} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Địa chỉ:</label>
                            <div className="col-md-8">
                                <input onKeyUp={this.onChange} name="address" className="form-control" type="text" defaultValue={this.state.address} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Mật khẩu:</label>
                            <div className="col-md-8">
                                <input onKeyUp={this.onChange} name="password" className="form-control" type="password" defaultValue="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Xác nhận mật khẩu:</label>
                            <div className="col-md-8">
                                <input onKeyUp={this.onChange} name="passwordConfirmation" className="form-control" type="password" defaultValue="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-3 control-label"/>
                            <div className="col-md-8">
                                <input onClick={this.onSave} type="button" className="btn btn-success mr-3" defaultValue="Lưu" />
                                <input onClick={()=>this.Modal(null)} type="button" className="btn btn-primary mr-3" defaultValue="Quay lại"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container pt-2" style ={this.state.Containerstyle}>
                        <h1>Teachers Manager</h1>
                        <div className = "Task-Manager">
                            <a className="button" onClick={()=>this.Modal('Create')}><i className ="fas fa-plus"></i>New</a>
                            <a className="button" onClick={()=>this.Modal('Edit')}><i className ="fas fa-pen"></i>Edit</a>
                        </div>
                        <div className = "content">
                            {this.Listing()}
                        </div>
                </div>
            </>
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
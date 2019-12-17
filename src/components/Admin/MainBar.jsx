import React,{Component} from 'react'
import Students from './Students'
import * as actions from '../../actions'
import { connect } from "react-redux";
class MainBar extends Component{
    constructor(props)
    {super(props)}

    componentDidMount(){
        this.props.getStudents()
    }
    register = async() =>{
        // params[
            //  :name,
            //  :email,
            //  :password,
            //  :birthday,
            //  :address,
            //  :role]
        // await this.props.Register(user)
    }
    render(){
        return (
            <div className = "mainbar" style = {style.mainBar}>
                <Students/>
                {/* <button onClick = {this.register}></button> */}
            </div>
        )
    }   
}

const style = {
    mainBar:{
        position: 'relative',
        float: 'right',
        left:'260px',
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getStudents : () =>{
            dispatch(actions.getStudentsApi())
        },
        Register : (user) =>{
            dispatch(actions.createUserApi(user))
        }
    }
}
export default connect(null,mapDispatchToProps)(MainBar)
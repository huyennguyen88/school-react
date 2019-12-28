import React,{Component} from 'react'
import { connect } from "react-redux";
import './Students.css'
class Students extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            list:[]
        }
    }

    componentWillReceiveProps(props)
    {
        this.setState({list:props.students})
    }
    render(){
        console.log(this.state.list)
        return (
            <div class="container pt-2">
                    <h1>Students Manager</h1>
                    <div className = "Task-Manager">
                        <a className="button"><i className ="fas fa-plus"></i>New</a>
                        <a className="button"><i className ="fas fa-trash"></i>Delete</a>
                        <a className="button"><i className ="fas fa-pen"></i>Edit</a>
                    </div>
                    <div className = "content">

                    </div>
            </div>
        )
    }   
}
const mapStateToProps = (state) =>{
    return {
        students : state.admin.students
    }
}
export default connect(mapStateToProps,null)(Students)
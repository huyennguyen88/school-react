import React, { Component } from 'react'
import avatar from "../../image/avatar.jpg"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from './../../actions/index'
class ChildrenItem extends Component {
    constructor(props) {
        super(props)
    }
    // console.log(key)
    componentDidMount(){
        this.props.getScore(this.props.children.student_id)
    }
    render() {
        // console.log(this.props.id)
        console.log(this.props.children.student_id)
        return (
            <div class="col-6 my-4">  
                <Link to={{
                    pathname:"/children",
                    //Chuyển đến <ChildrenPage/>
                    state: {student_id: this.props.children.student_id}
                    //Truyền student_id vào để <ChildrenPage/> dùng, để get detail của nó
                }} >
                <img src={avatar} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} custom mx-5 mb-3" alt="" style={{'height':'200px',}}/>
                </Link>
                <h4 className="text-danger"><strong>{this.props.children.name}</strong></h4>
                <h4 className="text-danger"><strong>Lớp {this.props.children.lop_hoc}</strong></h4>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {      
        getScore : (student_id) => {
            console.log("da goi")
            return dispatch(actions.getStudentScoreApi(student_id))
        }
    }
}
export default connect(null,mapDispatchToProps)(ChildrenItem)
import React, { Component } from 'react'
import avatar from '../../image/avatar.jpg'
import StudentInfo from './StudentInfo'
import StudentList from '../Teacher/StudentList'
import StudentParentInfo from './StudentParentInfo'
import { connect } from "react-redux";
import * as actions from '../../actions/index'
import StudentHocLuc from './StudentHocLuc'
import StudentDSLop from './StudentDSLop'
class StudentPage extends Component {
    constructor(props) {
        super(props);
    }
    
    // async componentDidMount() {
    //     if(this.props.user.id){
    //         let user_id = this.props.user.id
    //     await this.props.getInfo(user_id)}
    // }
    
    async componentWillMount(){
        var token = JSON.parse(localStorage.getItem('token'))
        if(token)  await this.props.getInfo(token)
    }
    
    render() {
        let {score} = this.props
            return(<div className="container-fluid my-5">
            <h3><strong>Student's name</strong></h3>
            <hr/>
            <div className="row">
            <div className="col-2">
                
                <img src={avatar} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} custom my-3" alt=""/>
                <button type="button" className="btn btn-info mx-2 text-white"><h5><strong>Đổi ảnh đại diện</strong></h5></button>
            </div>
            <div className="col-10">
            <div className="row">
            <div className="col-3">
                <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-home" aria-selected="true"><h5><strong>Cá nhân</strong></h5></a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Học lực</strong></h5></a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Lớp</strong></h5></a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Liên hệ</strong></h5></a>
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab"><StudentInfo/></div>
                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h4 className="mb-3"><strong>Học lực:</strong></h4>
                            <StudentHocLuc score={score}/>  
                    </div>
                    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h4 className="mb-3"><strong>Danh sách lớp:</strong></h4>
                        <table className="table table-borderless table-white" style={{'borderRadius':'10px','boxShadow':'1px 2px 5px black'}}>
                            <StudentDSLop/>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-profile-tab"><StudentParentInfo/></div>
                </div>
            </div>
        </div>
            </div>
            </div>
        </div>)
        }
}
const mapStateToProps = (state)=>{
    console.log(state.studentScore)
    return {
        user : state.session,
        score: state.studentScore
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        getInfo:(token) => {
            return dispatch(actions.getStudentDetailFromTokenApi(token))
            // Thay đổi state.children
            // Trả về mssv, name, parent, parent_detail, address, email, birthday
        },
}
}
export default connect(mapStateToProps,mapDispatchToProps)(StudentPage);
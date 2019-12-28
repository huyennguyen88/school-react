import React, { Component } from 'react'
import avatar from '../../image/avatar.jpg'
import { connect } from "react-redux";
import * as actions from '../../actions/index'
import ChildrenInfo from './ChildrenInfo'
import {Link,withRouter} from 'react-router-dom'
import ChildrenStudentList from './ChildrenStudentList';
import ChildrenHocLuc from './ChildrenHocLuc';
class ChildrenPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log(this.props.location.state.student_id)
        //In ra id để xem bên ChildrenItem truyền có được không
        this.props.getInfo(this.props.location.state.student_id)
    }
    
    render() {
        let {score} = this.props
        console.log(score)
        return (
            <div className="container-fluid my-5">
                <h3 style={{"display":"inline"}}><strong>Student's name</strong></h3>
                <Link to="/parent">
                    <button style={{"display":"inline"}} className="btn btn-info float-right">Back</button>
                </Link>
                <hr/>
                <div className="row">
                <div className="col-2">
                    
                    <img src={avatar} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} custom my-3" alt=""/>
                    <button type="button" className="btn btn-info mx-auto text-white"><h5><strong>Đổi ảnh đại diện</strong></h5></button>
                </div>
                <div className="col-10">
                <div className="row">
                <div className="col-3">
                    <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-home" aria-selected="true"><h5><strong>Cá nhân</strong></h5></a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Học lực</strong></h5></a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Lớp</strong></h5></a>
                    </div>
                </div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-home-tab"><ChildrenInfo/></div>
                        <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <h4 className="mb-3"><strong>Học lực các năm:</strong></h4>
                                <ChildrenHocLuc score={score}/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <h4 className="mb-3"><strong>Danh sách lớp:</strong></h4>
                            <table className="table table-borderless table-white" style={{'borderRadius':'10px','boxShadow':'1px 2px 5px black'}}>
                                <ChildrenStudentList/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state.studentScore)
    return {
        score : state.studentScore
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        getInfo:(id) => {
            return dispatch(actions.getChildrenDetailApi(id))
            //Thay đổi state.children
            //Trả về mssv, name, parent, parent_detail, address, email, birthday
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChildrenPage));
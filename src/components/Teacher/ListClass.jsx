import React, { Component } from 'react';
import ListClassItem from './ListClassItem'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from './../../actions/index'
class ListClass extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        var token = JSON.parse(localStorage.getItem('token'))
        if(token)  await this.props.loadClasses(token)
    }
    render() {
        var {classes} = this.props
        var lopHoc = classes.classes
        var soLuong = classes.numberStudents
        var listClass = null
        if(lopHoc && soLuong){
            listClass = lopHoc.map((c,i)=>{
                return <ListClassItem key={i} lophoc={c} number={soLuong[i]}/>
            })
        }
        return (
            <div>
                <div className="container mt-3 mb-3">
                    <h1>Danh sách lớp</h1>
                    <hr />
                    <div className="row"> 
                        <table className="table table-bordered text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Mã lớp</th>
                                    <th>Tên lớp</th>
                                    <th>Sô lượng học sinh</th>
                                    <th>Lớp chuyên</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listClass}
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/menu">
                                <button type="button" className="btn btn-primary float-right">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        classes: state.classesEveryTeacher
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        loadClasses: (token)=>{
            return dispatch(actions.getClassesTeacherApi(token))
        }
    }
}
export default (connect)(mapStateToProps,mapDispatchToProps)(ListClass);
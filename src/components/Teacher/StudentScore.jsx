import React, { Component } from 'react';
import StudentScoreItem from './StudentScoreItem'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

class StudentScore extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyword: ""
        }
    }
    onChange = (e)=>{
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit = ()=>{
        this.props.searchStudent(this.state.keyword);
    }
    render() {
        var { scores,search } = this.props
        var nameSub
        if (scores[0]) {
            nameSub = scores[0].subject.name
        }
        if(scores){
            var scores = scores.filter((s,i)=>{
                return s.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            })
            var scorelist = scores.map((s, i) => {
                return <StudentScoreItem key={i} score={s} />
            })
        }
        return (
            <div>
                <div className="container mt-3 mb-3">
                    <h1>Môn học: <b>{nameSub}</b></h1>
                    <div className="form-inline my-3">
                        <input onKeyUp={this.onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={this.onSubmit} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                        {/* <button className="btn btn-info" style={{ marginLeft: "59%" }}>Tạo phòng chat</button> */}
                    </div>
                    <div className="row">
                        <table className="table table-bordered text-center">
                            <thead >
                                <tr className="bg-success text-white">
                                    <th rowSpan="3">Ảnh đại diện</th>
                                    <th rowSpan="3">MSSV</th>
                                    <th rowSpan="3">Họ và tên</th>
                                    <th colSpan="8">Điểm</th>
                                    <th rowSpan="3">Tổng kết</th>
                                </tr>
                                <tr className="table table-success">
                                    <th colSpan="4">HK1</th>
                                    <th colSpan="4">HK2</th>
                                </tr>
                                <tr className="table table-success">
                                    <th>15'</th>
                                    <th>15'</th>
                                    <th>1 Tiết</th>
                                    <th>Cuối kì</th>
                                    <th>15'</th>
                                    <th>15'</th>
                                    <th>1 Tiết</th>
                                    <th>Cuối kì</th>
                                </tr>
                            </thead>
                            <tbody className="table table-striped table-success">
                                {scorelist}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        scores: state.studentScoreInClass,
        search: state.search
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        searchStudent: (keyword)=>{
            return dispatch(actions.Search(keyword))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentScore);
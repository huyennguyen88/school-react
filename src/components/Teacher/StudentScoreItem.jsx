import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import './style.css'
import * as actions from './../../actions/index'
class StudentScoreItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            name0: 0.0,
            name1: 0.0,
            name2: 0.0,
            name3: 0.0,
            name4: 0.0,
            name5: 0.0,
            name6: 0.0,
            name7: 0.0,
        }
    }
    notify = () => {
        toast.success("Sửa thành công",{
            position: toast.POSITION.TOP_RIGHT
        });
    }
    componentWillMount(){
        var {HK1,HK2} = this.props.score
        this.setState({
            name0: HK1[0].score,
            name1: HK1[1].score,
            name2: HK1[2].score,
            name3: HK1[3].score,
            name4: HK2[0].score,
            name5: HK2[1].score,
            name6: HK2[2].score,
            name7: HK2[3].score,
        })
        console.log("10")
    }
    openPopup = () => {
        this.setState({
            open: true
        })
    }
    closePopup = () => {
        this.setState({
            open: false
        })
    }
    onChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: parseFloat(value)
        })
    }
    onSumbit = () => {
        var score_arr = [];
        var state = this.state
        var {mssv,subject} = this.props.score
        score_arr.push(state.name0,state.name1,state.name2,state.name3,state.name4,state.name5,state.name6,state.name7);
        score_arr = score_arr.map((s,i)=>{
            if(!s){
                s = -1;
            }
            return s
        })
        this.props.updateStudentScores(mssv,subject.id,score_arr);
        score_arr =[]
        this.setState({
            open: false,
        })        
        this.notify();
    }
    componentWillUnmount(){
        this.setState({
            name0: 0.0,
            name1: 0.0,
            name2: 0.0,
            name3: 0.0,
            name4: 0.0,
            name5: 0.0,
            name6: 0.0,
            name7: 0.0,
        })
    }
    render() {
        var { score } = this.props;
        var diemhk1 = 0;
        var diemhk2 = 0;
        for (let s of score.HK1){
            if(s.score > -1 || score < 11){
                diemhk1 += s.score*s.heso
            }else{
                diemhk1 = -1;
                break;
            }
        }
        for (let s of score.HK2){
            if(s.score > -1 || score < 11){
                diemhk2 += s.score*s.heso
            }else{
                diemhk2 = -1;
                break;
            }
        }
        var hk1 = score.HK1.map((s, i) => {       
            return <td key={i}>{s.score >= 0 ? s.score : ""}</td>
        })
        var hk2 = score.HK2.map((s, i) => {
          
            return <td key={i}>{s.score >= 0 ? s.score : ""}</td>
        })
        var hk1Input = score.HK1.map((s, i) => {
            return <td key={i+"hk1"}><input type="number" onChange={this.onChange} name={"name" + i} max="10" min="0" className="btn-pop hk1" defaultValue={s.score >= 0? s.score : ""} key={i} /></td>
        })
        var hk2Input = score.HK2.map((s, i) => {

            return <td key={i+"hk2"}><input type="number" onChange={this.onChange} name={"name" + (i + 4)} max="10" min="0" className="btn-pop hk2" defaultValue={s.score >= 0 ? s.score : ""} key={i} /></td>
        })
        diemhk1 /= 7
        diemhk2 /= 7
        var tongket = -1
        if (diemhk1 > 0 && diemhk2 > 0) {
            tongket = parseFloat(((diemhk1 + diemhk2 * 2) / 3).toFixed(2))
        }
        return (
            <>
                <Modal show={this.state.open} onHide={this.closePopup} style={{ width: "100%!important" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{score.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
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
                                <tbody>
                                    <tr>
                                        <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{ height: "50px" }} alt="" /></td>
                                        <td>{score.mssv}</td>
                                        <td>{score.name}</td>
                                        {hk1Input}
                                        {hk2Input}
                                        <td>{tongket === -1? "" : tongket}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="option" style={{ textAlign: "center" }}>
                                <button type="button" className="btn btn-success mr-3" onClick={this.onSumbit}>Lưu</button>
                                <button type="button" className="btn btn-danger mr-3" onClick={this.closePopup}>Hủy bỏ</button>
                            </div>
                        </>

                    </Modal.Body>

                </Modal>
                <tr onClick={this.openPopup} >
                    <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{ height: "50px" }} alt="" /></td>
                    <td>{score.mssv}</td>
                    <td>{score.name}</td>
                    {hk1}
                    {hk2}
                    <td>{tongket !== -1 ? tongket : ""}</td>
                </tr>
            </>
        );
    }
}
const style = {
    input: {
        width: "40px",
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updateStudentScores: (id_student,id_subject,score_arr)=>{
            return dispatch(actions.updateStudentScoresApi(id_student,id_subject,score_arr));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentScoreItem);
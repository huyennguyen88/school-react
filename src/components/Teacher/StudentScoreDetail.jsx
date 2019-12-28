import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap'
import { connect } from 'react-redux'
class StudentScoreDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    openPopup = () => {
        console.log(this.props.score)
        this.setState({
            open: true
        })
    }
    closePopup = () => {
        this.setState({
            open: false
        })
    }
    onChange = (e)=>{
       console.log(e.target.value)
    }
    onSumbit = ()=>{
      
    }
    render() {
        var {hk1Input,hk2Input,score,tongket} = this.props 
        return (
            <Modal show={this.state.open} style={{ width: "100%!important" }}>
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
                                    <td>{tongket !== 0 ? tongket : ""}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="option" style={{ textAlign: "center" }}>
                            <button type="button" className="btn btn-success mr-3" onClick={this.onSumbit}>Save</button>
                            <button type="button" className="btn btn-danger mr-3" onClick={this.closePopup}>Cancel</button>
                        </div>
                    </>

                </Modal.Body>

            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, null)(StudentScoreDetail);
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class StudentParentInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {parent} = this.props
        console.log(parent.id)
        return (
            <>
            <h4 className="mb-3"><strong>Thông tin phụ huynh: </strong></h4>
            <table className="table table-borderless table-secondary" style={{'borderRadius':'10px','boxShadow':'1px 2px 5px black'}}>
                <tbody>
                    <tr>
                        <td><h5><strong>Họ tên :</strong></h5></td>
                        <td>{parent.name}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Email :</strong></h5></td>
                        <td>{parent.email}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Ngày sinh :</strong></h5></td>
                        <td>{(parent.birthday+"").substring(0,10)}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Địa chỉ :</strong></h5></td>
                        <td>{parent.address}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Giới tính :</strong></h5></td>
                        <td>Nam</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Mật khẩu :</strong></h5></td>
                        <td>********</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state.children.parent_detail)
    return{
        parent: state.studentParent
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
export default (connect)(mapStateToProps,mapDispatchToProps)(StudentParentInfo)
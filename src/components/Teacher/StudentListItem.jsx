import React, { Component } from 'react';
import avatar from '../../image/avatar.jpg'
class StudentListItem extends Component {
    render() {
        var {student} = this.props
        return (
            <tr>
                <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>{student.mssv}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.parent}</td>
            </tr>
        );
    }
}

export default StudentListItem;
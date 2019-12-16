import React, { Component } from 'react';
import avatar from '../../image/avatar.jpg'
class StudentListItem extends Component {
    render() {
        return (
            <tr>
                <td><img src={avatar} className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>{this.props.mssv}</td>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
                <td>{this.props.parent}</td>
            </tr>
        );
    }
}

export default StudentListItem;
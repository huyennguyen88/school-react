import React, { Component } from 'react';

class StudentListItem extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.ava} className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>{this.props.mssv}</td>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
                <td>{this.props.parent}</td>
            </tr>
        );
    }
}

export default StudentListItem;
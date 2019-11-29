import React, { Component } from 'react';

class StudentDiligenceItem extends Component {
    render() {
        return (
            <tr>
                <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>123654</td>
                <td>Nguyen Tat Dang</td>
                <td>100%</td>
                <td>3</td>
                <td>1</td>
            </tr>
        );
    }
}

export default StudentDiligenceItem;
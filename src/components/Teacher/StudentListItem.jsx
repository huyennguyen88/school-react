import React, { Component } from 'react';

class StudentListItem extends Component {
    render() {
        return (
            <tr className="table table-success">
                <td scope="row">Ava o day ne</td>
                <td>123654</td>
                <td>Nguyen Tat Dang</td>
                <td>263 Ong Ich Khiem</td>
                <td>Bo cua Dang</td>
            </tr>
        );
    }
}

export default StudentListItem;
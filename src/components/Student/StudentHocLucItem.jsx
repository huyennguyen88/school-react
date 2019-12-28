import React, { Component } from 'react'

export default class StudentHocLucItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let score = this.props.mon
        var tb = -1;
        if(score.heso1 < 0 || score.heso2 < 0 || score.heso3 < 0 || score.heso4 < 0)
        {   
            tb = -1
        }
        else{
            tb = parseFloat((score.heso1+score.heso2+score.heso3*2+score.heso4*3)/7).toFixed(1)
        }
        return (
            <tr>
                <td><strong>{score.mon}</strong></td>
                <td>{score.heso1 > 0? score.heso1 : ""}</td>
                <td>{score.heso2 > 0? score.heso2 : ""}</td>
                <td>{score.heso3 > 0? score.heso3 : ""}</td>
                <td>{score.heso4 > 0? score.heso4 : ""}</td>
                <td><strong>{tb > 0 ? tb : ""}</strong></td>
            </tr>
        )
    }
}

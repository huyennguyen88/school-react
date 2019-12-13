import React, { Component } from 'react';
import {connect} from 'react-redux'
class StudentScoreItem extends Component {
    render() {
        console.log(this.props.scores)
        return (
            <tr>
                <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>102160239</td>
                <td>Nguyễn Tất Đang</td>
                <td>7</td>
                <td>8</td>
                <td>7</td>
                <td>9</td>
                <td>7</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>10</td>
            </tr>
            
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        scores: state.studentScoreInClass
    }
}
export default connect(mapStateToProps,null)(StudentScoreItem);
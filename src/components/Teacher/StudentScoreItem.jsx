import React, { Component } from 'react';
import {connect} from 'react-redux'
class StudentScoreItem extends Component {
    render() {
        var {score} = this.props
        var diemhk1 = 0
        var diemhk2 = 0
        var hk1 = score.HK1.map((s,i)=>{
            if(s.heso !== 0){
                diemhk1 += s.score*s.heso
            }
            else diemhk1 = 0;
            return <td key={i}>{s.score}</td>
        })
        
        var hk2 = score.HK2.map((s,i)=>{
            if(s.heso !== 0){
                diemhk2 += s.score*s.heso
            }
            else diemhk2 = 0;
            return <td key={i}>{s.score}</td>
        })
        diemhk1 /= 7
        diemhk2 /= 7
        var tongket =0
        if(diemhk1 !== 0 && diemhk2 !== 0){
            tongket = parseFloat(((diemhk1+diemhk2*2)/3).toFixed(2))
        }
        return (
            <>
            <tr>
                <td><img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid" style={{height:"50px"}}  alt=""/></td>
                <td>{score.mssv}</td>
                <td>{score.name}</td>
                {hk1}
                {hk2}
                <td>{tongket !== 0? tongket : "" }</td>
            </tr>
            </>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
       
    }
}
export default connect(mapStateToProps,null)(StudentScoreItem);
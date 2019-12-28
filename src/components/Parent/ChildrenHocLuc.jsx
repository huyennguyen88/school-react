import React, { Component } from 'react'
import ChildrenHocLucItem from './ChildrenHocLucItem'
import { connect } from "react-redux";
class ChildrenHocLuc extends Component {
    constructor(props)
    {super(props)}
    render() {
        // var hocki = this.props.years.map((s,index)=>{
        //     return <StudentHocLucItem key={index} />
        // })
        let {score} = this.props
        console.log(score[0])
        // console.log(hocki)
        var hocki = score.map((s,index)=>{
            return (
                <li className="nav-item">
                    <a className={index===0?"nav-link active text-dark":"nav-link text-dark"} id={index+"-tab"} data-toggle="tab" href={"#"+index} role="tab" aria-controls={index} aria-selected={index===0? "true" : "false" }><strong>{s[0].hocki}</strong></a>
                </li>
            )
        })
        var bangdiem = score.map((s,index)=>{
            var diem = s.map((mon,index)=>{
                return <ChildrenHocLucItem mon={mon} key={index}/>
            })
            return (
                <div className={index===0?"tab-pane fade show active":"tab-pane fade"} id={index} role="tabpanel" aria-labelledby={index+"-tab"}>
                    <table className="table table-bordered text-center table-striped my-3" >
                        <thead >
                            <tr className="bg-success text-white">
                                <th rowSpan="3">Môn</th>
                                <th colSpan="4">Điểm</th>
                                <th rowSpan="3">Tổng kết</th>
                            </tr>
                            <tr className="table table-success">
                                <th>15'</th>
                                <th>15'</th>
                                <th>1 Tiết</th>
                                <th>Cuối kì</th>
                            </tr>
                        </thead>
                        <tbody className="table table-striped table-success">
                            {diem}
                        </tbody>
                    </table>
                </div>
            )
        })
        return (
            <div className="container my-3" style={{'borderRadius':'10px', 'padding':'10px','box-shadow':'1px 2px 5px grey'}}>
                <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
                    {hocki}
                </ul>
                <div className="tab-content " id="myTabContent">
                    {bangdiem}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    // console.log(state.studentScore)
    return{
       
    }
}
export default connect(mapStateToProps,null)(ChildrenHocLuc);
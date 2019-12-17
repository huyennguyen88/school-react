import React,{Component} from 'react'
import { connect } from "react-redux";
class Students extends Component{
    constructor(props)
    {super(props)}

    componentWillReceiveProps(props)
    {
    }

    render(){
        return (
            <div className="container mt-3 mb-3">
                <h1>Danh sách lớp</h1>
                <hr />
                <div className="row"> 
                    <table className="table table-bordered text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Mã lớp</th>
                                <th>Tên lớp</th>
                                <th>Lớp chuyên</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary float-right">Back</button>
                    </div>
                </div>
            </div>
        )
    }   
}
const mapStateToProps = (state) =>{
    return {
        students : state.admin
    }
}
export default connect(mapStateToProps,null)(Students)
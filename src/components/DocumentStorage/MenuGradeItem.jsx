import React, { Component } from 'react'
import "./LeftSideBar.scss";
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class MenuGradeItem extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         subjects: [],
    //         grade: '',
    //         index: ''
    //     }
    // }
    // componentDidMount(){
    //     this.setState({
            
    //     })
    // }
    render() {
        var {grade, index} = this.props
       
        return (
            <li>
                <a href={"#grade"+index} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{grade.name}</a>
                <ul className="collapse list-unstyled" id={"grade"+index}>
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}
export default connect(mapStateToProps, null)(MenuGradeItem)

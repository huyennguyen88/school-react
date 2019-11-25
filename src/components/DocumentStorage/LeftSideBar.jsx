import React, { Component } from 'react'
import { connect } from "react-redux";
import "./LeftSideBar.scss";
import * as actions from '../../actions/index'
class LeftSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: []
        }
        // this.props.getClasses()
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            classes: nextProps.classes
        })
    }
    render() {
        var { classes } = this.state
        return (
            <div>
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
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
                    </ul>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        classes: state.classes
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getClasses: () => {
            dispatch(actions.getClassesApi())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar)

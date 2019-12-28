import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actions from './../../actions/index'
import ChildrenItem from './ChildrenItem'
class Children extends Component {
    render() {
        var {childrens} = this.props
        var childrenList = childrens.map((s,index)=>{
            return <ChildrenItem key={index} children={s} id={index}/>
        })
        return (
            <div className="text-center" style={{'border':'1px solid grey','borderRadius':'5px', 'padding':'10px'}}>  
            <h4 class="mt-3 text-danger"><strong>Danh sách con em: </strong></h4>
                <div class="row">
                    {childrenList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    // console.log(state)
    return{
        childrens : state.childrenOfParent
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Children)

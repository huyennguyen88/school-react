import React, { Component } from 'react'

import ChildrenItem from './ChildrenItem'
export default class Children extends Component {
    render() {
        return (
            <div className="text-center" style={{'border':'1px solid grey','borderRadius':'5px', 'padding':'10px'}}>  
            <h4 class="mt-3"><strong>Danh sách con em: </strong></h4>
                <div class="row">
                    <ChildrenItem/>
                    <ChildrenItem/>
                </div>
            </div>
        )
    }
}

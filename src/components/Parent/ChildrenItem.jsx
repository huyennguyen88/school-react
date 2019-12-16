import React, { Component } from 'react'
import avatar from "../../image/avatar.jpg"
export default class ChildrenItem extends Component {
    render() {
        return (
            <div class="col-6 my-4">  
                <img src={avatar} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} custom mx-5 mb-3" alt="" style={{'height':'200px',}}/>
                <h4><strong>Nguyen Van Teo</strong></h4>
                <h4><strong>Lớp 9A (ở lại 2 năm)</strong></h4>
            </div>
        )
    }
}

import React, { Component } from 'react'
import "./ParentPageStyle.scss"
import avatar from "../../image/avatar.jpg"
import ProfileMain from "../Profile/ProfileMain"
import ParentInfo from './ParentInfo';
import ChildrenList from './ChildrenList'
class ParentPage extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "./ParentPage.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="container-fluid my-5">
                <h3><strong>Parent's name</strong></h3>
                <hr/>
                <div className="row">
                <div className="col-2">
                    
                    <img src={avatar} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} custom my-3" alt=""/>
                    <button type="button" class="btn btn-info mx-2 text-white"><h5><strong>Đổi ảnh đại diện</strong></h5></button>
                </div>
                <div className="col-10">
                <div className="row">
                <div className="col-3">
                    <div className="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><h5><strong>Cá nhân</strong></h5></a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><h5><strong>Thông tin của con</strong></h5></a>
                    </div>
                </div>
                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><ParentInfo/></div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><ChildrenList/></div>
                    </div>
                </div>
            </div>
                </div>
                </div>
            </div>
        )
        
    }
}
export default ParentPage
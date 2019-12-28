import React from 'react';
import { Link } from 'react-router-dom'
import info from './../../../image/2016366.png'
import messager from './../../../image/messeger.png'
import notification from './../../../image/notification.png'
class MenuTeacher extends React.Component {
    render() {
        return (
            <div className="menu-teacher" style={style.menu}>
                <Link to="/parent" style={style.item}>
                    <div className="card">
                        <img className="card-img-top" src={info} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Thông tin</h5>
                        </div>
                    </div>
                </Link>
                <Link to="/chat" style={style.item}>
                    <div className="card">
                        <img className="card-img-top" src={messager} alt="" />
                        <div className="card-body">
                            <h5 className="card-title ml-1">Nhắn tin</h5>
                        </div>
                    </div>
                </Link>
                <Link to="/" style={style.item}>
                    <div className="card">
                        <img className="card-img-top" src={notification} alt="" />
                        <div className="card-body">
                            <h5 className="card-title ">Thông báo</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
var style={
    menu:{
        margin: "0 5%"
    },
    item:{
        margin: "0 4.1%"
    }
}
export default MenuTeacher
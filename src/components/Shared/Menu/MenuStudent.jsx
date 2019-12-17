import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import info from './../../../image/2016366.png'
import messager from './../../../image/messeger.png'
import classroom from './../../../image/education.png'
import books from './../../../image/books.png'
class MenuTeacher extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="menu-teacher" style={style.menu}>
                <Link to="/profile" style={style.item}>
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
                <Link to="/">
                    <div className="card" style={style.item}>
                        <img className="card-img-top" src={books} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Kho tài liệu</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
var style = {
    menu: {
        margin: "0 5%"
    },
    item: {
        margin: "0 5%"
    }
}
export default MenuTeacher
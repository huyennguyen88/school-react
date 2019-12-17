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
            <div className="menu-teacher">
                <Link to="/profile">
                    <div className="card">
                        <img className="card-img-top" src={info} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Thông tin</h5>
                        </div>
                    </div>
                </Link>
                <Link to="/chat">
                    <div className="card">
                        <img className="card-img-top" src={messager} alt="" />
                        <div className="card-body">
                            <h5 className="card-title ml-1">Nhắn tin</h5>
                        </div>
                    </div>
                </Link>
                <Link to="/listclass">
                    <div className="card">
                        <img className="card-img-top" src={classroom} alt="" />
                        <div className="card-body">
                            <h5 className="card-title ml-2">DS Lớp</h5>
                        </div>
                    </div>
                </Link>
                <Link to="/publicStorage">
                    <div className="card">
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
export default MenuTeacher
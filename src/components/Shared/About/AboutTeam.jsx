import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class AboutTeam extends Component {
    render() {
        return (
            <div>
                <section className="banner_bottom1 py-md-5">
                    <div className="container py-4 mt-2">
                        <h3 className="heading-agileinfo text-center">About  <span>Us</span></h3>
                        <div className="inner_sec_info_wthree_agile mt-md-5 pt-3">
                            <div className="row help_full">
                                <div className="col-lg-6 banner_bottom_grid help">
                                    <img src="images/bg_profile.jpg" alt=" " className="img-fluid" />
                                </div>
                                <div className="col-lg-6 banner_bottom_left1">
                                    <h4>Team <span>Vui Là Chính</span></h4>
                                    <p>
                                        Since 2018
                                    </p>
                                    <p>
                                       <p>LÊ HOÀNG TÚ</p>
                                       <p>NGUYỄN TẤT ĐANG</p>
                                       <p>TRỊNH TRUNG HIẾU</p>
                                       <p>NGUYỄN THANH HUYỀN</p>                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team py-md-5 py-4">
                    <div className="container py-lg-5">
                        <h2 className="heading-agileinfo text-center  mb-4">Our <span> Team</span></h2>
                        <div className="row inner-sec-w3layouts-agileinfo pt-md-5">
                            <div className="col-md-3 col-sm-6 team-grids aos-init" data-aos="flip-left">
                                <img src="images/tu_profile3.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <h4>Lê Hoàng Tú</h4>
                                        <h6>Captain
                                          </h6><h6>
                                        </h6></div>
                                    <div className="social-icons-section">
                                        <a className="fac" href="http://fb.com/mrahn123">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="pinterest" href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 team-grids aos-init" data-aos="flip-right">
                                <img src="images/dang_profile.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <h4>Nguyễn Tất Đang</h4>
                                        <h6>Member</h6>
                                    </div>
                                    <div className="social-icons-section">
                                        <a className="fac" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="pinterest" href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 team-grids aos-init" data-aos="flip-left">
                                <img src="images/hieu_profile.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <h4>Trịnh Trung Hiếu</h4>
                                        <h6>Member</h6>
                                    </div>
                                    <div className="social-icons-section">
                                        <a className="fac" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="pinterest" href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 team-grids aos-init" data-aos="flip-right">
                                <img src="images/huyen_profile2.jpg" className="img-fluid" alt="" />
                                <div className="team-info">
                                    <div className="caption">
                                        <h4>Nguyễn Thanh Huyền</h4>
                                        <h6>Member</h6>
                                    </div>
                                    <div className="social-icons-section">
                                        <a className="fac" href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="twitter" href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="pinterest" href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutTeam;
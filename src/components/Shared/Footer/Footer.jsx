import React, { Component } from 'react';
import logo from './../../../image/logo.jpg'

class Footer extends Component {
    render() {
        return (
            <div >                                                              
                <footer className="newsletter_right pymd-5 py-4" id="footer">
                    <div className="container">
                        <div className="inner-sec py-md-5 py-3">
                            <div className="row mb-md-4 mb-md-3">
                                <div className="col-lg-3 col-md-6 social-info text-left">
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Thông Tin</h3>
                                    <p>42 Nguyễn Lương Bằng, Đại học Bách Khoa Đà Nẵng</p>
                                    <p className="my-2"> Đà Nẵng, Việt Nam</p>
                                    <p className="phone">Phone: +84774455559 </p>
                                    <p className="phone">Mail:
                    <a href="mailto:info@example.com"> mrahn1234@gmail.com</a>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-6 social-info text-left">
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Giới thiệu</h3>
                                    <p>Hệ thông trường học cung cấp các dịch vụ liên quan đến giáo dục  </p>
                                </div>
                                <div className="col-lg-6 col-md-12 n-right tex-left">
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Đăng ký ứng dụng</h3>
                                    <form action="#" method="post">
                                        <div className="form-group d-flex">
                                            <input className="form-control" type="email" name="Email" placeholder=" Email Address" required />
                                            <input className="form-control submit text-uppercase" type="submit" defaultValue="Subscribe" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <p className="copy-right mt-2">© 2019 School System. All Rights Reserved | Design by
                  <a href="http://fb.com/mrahn123"> VLC Team </a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social-icons scial justify-content-end">
                                    <li className="mr-1"><a href="http://fb.com/mrahn123"><span className="fab fa-facebook-f" /></a></li>
                                    <li className="mx-1"><a href="#"><span className="fab fa-twitter" /></a></li>
                                    <li className="mx-1"><a href="#"><span className="fab fa-google-plus-g" /></a></li>
                                    <li className="mx-1"><a href="#"><span className="fab fa-linkedin-in" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

var style = {
    backgroundColor: "#E1055E"
}
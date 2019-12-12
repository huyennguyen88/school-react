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
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Get in touch</h3>
                                    <p>0926k 4th block building,king Avenue, </p>
                                    <p className="my-2"> New York City,USA</p>
                                    <p className="phone">phone: +0444 555 6789</p>
                                    <p className="phone my-2">Fax: +0444 555 6789</p>
                                    <p className="phone">Mail:
                    <a href="mailto:info@example.com">info@example.com</a>
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-6 social-info text-left">
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">About Us</h3>
                                    <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus.
                    Nulla porttitor accumsana tincidunt. Vestibulum ante ipsum primis tempus convallis.</p>
                                </div>
                                <div className="col-lg-6 col-md-12 n-right tex-left">
                                    <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Subscribe our Newsletter</h3>
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
                                <p className="copy-right mt-2">© 2018 Subject. All Rights Reserved | Design by
                  <a href="http://w3layouts.com/"> W3layouts </a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <ul className="social-icons scial justify-content-end">
                                    <li className="mr-1"><a href="#"><span className="fab fa-facebook-f" /></a></li>
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
import React, { Component } from 'react';


class Footer extends Component {
    render() {

        return (
            <div >
                <footer class="page-footer font-small teal pt-2" style={style} >

                    <div class="container-fluid text-center text-md-left " style={{height: "100px"}}>

                        <div class="row h-100">

                            <div class="col align-self-center ">
                                <img src="./image/logo.jpg" height="100" alt="logo" />
                                <span className="sr-only"></span>
                            </div>

                            <div class="col-md-3 mt-md-0 mt-6">

                                <p></p>

                            </div>

                            <hr class="clearfix w-100 d-md-none " />

                            <div class="col-md-3 mb-md-0 mb-3 text-white" >

                                <h6 className="text-white">54 Nguyen Luong Bang St</h6>
                                <h6 className="text-white">Hoa Khanh, Da Nang, Viet Nam</h6>
                                <h6 className="text-white">0236-123-789</h6>
                                <h6 className="text-white">vlc@gmail.com</h6>

                            </div>

                        </div>

                    </div>
                    <div class="footer-copyright text-center py-3 text-white">© 2018 Copyright: abc@gmail.com
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

var style ={
    backgroundColor: "#E1055E"
}
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Banner extends Component {
    render() {

        return (
            <div >
                <div className="banner">
                    <div className="container">
                        <div className="banner-text">
                            <div className="slider-info">
                                <h3>
                                    What would <span>you like </span> to learn?
                            </h3>
                                <Link  to="/menu" className="banner-button btn mt-md-5 mt-4">
                                    Vào Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;

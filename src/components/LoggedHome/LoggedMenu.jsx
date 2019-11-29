import React, { Component } from 'react';
import Main from '../Homepage/Main';

class LoggedMenu extends Component {
    render() {
        return (
            <div>
                <Main />
                <div class="container pt-2">
                    <h1>Main menu</h1>
                    <hr />
                    <div class="row pb-2">

                        <div class="col">
                            <div class="container">
                                <img src="https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nc3EzWKau3OuwCwQhjvlZJPxyD55ospy%2Fsystem-icons-design-priniciples-02.png" className="img-fluid " alt="" />
                                <h1 class="text-center">Title here</h1>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <img src="https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nc3EzWKau3OuwCwQhjvlZJPxyD55ospy%2Fsystem-icons-design-priniciples-02.png" className="img-fluid " alt="" />
                                <h1 class="text-center">Title here</h1>
                            </div>
                        </div>
                        <div class="col">
                            <div class="container">
                                <img src="https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1nc3EzWKau3OuwCwQhjvlZJPxyD55ospy%2Fsystem-icons-design-priniciples-02.png" class="img-fluid " alt="" />
                                <h1 class="text-center">Title here</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoggedMenu;
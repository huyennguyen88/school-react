import React, { Component } from 'react'

export class ProfileMain extends Component {
    render() {
        return (
            <div>
                
                <div class="container pb-4 mb-4">
                <p className="h2">Profile here</p>
                <hr/>
                    <div class="row border mb-3">
                        <div class="col-3">
                            <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                        </div>
                        <div class="col-8">
                        <table class="table">
                        <tbody>
                            <tr>
                                <td scope="row">Ho ten</td>
                                <td>Nguyen Tat Dang</td>
                            </tr>
                            <tr>
                                <td scope="row">Ngay sinh</td>
                                <td>06-06-1998</td>
                            </tr>
                            <tr>
                                <td scope="row">Gioi tinh</td>
                                <td>Nam</td>
                            </tr>
                            <tr>
                                <td scope="row">Mat khau</td>
                                <td>********</td>
                            </tr>
                        </tbody>
                    </table>
                        </div>
                        
                    </div>
                    <a name="" id="" class="btn btn-primary float-right " href="#" role="button">Back</a>
                </div>
                
            </div>
        )
    }
}

export default ProfileMain

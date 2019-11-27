import React, { Component } from 'react'

export class ProfileMain extends Component {
    render() {
        return (
            <div>

                <div class="container mb-3">
                    <p className="h2">Profile here</p>
                    <hr />
                    <div class="row border mb-3">
                        <div class="col-3">
                            <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid " alt="" />
                        </div>
                        <div class="col-8">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td >Ho ten</td>
                                        <td>Nguyen Tat Dang</td>
                                    </tr>
                                    <tr>
                                        <td >Ngay sinh</td>
                                        <td>06-06-1998</td>
                                    </tr>
                                    <tr>
                                        <td >Gioi tinh</td>
                                        <td>Nam</td>
                                    </tr>
                                    <tr>
                                        <td >Mat khau</td>
                                        <td>********</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn btn-primary float-right">Back</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProfileMain

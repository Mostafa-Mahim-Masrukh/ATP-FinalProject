import React from 'react';
import Navbar from '../../../layout/front-end/Navbar';
function Register() {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" name="name" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="address" name="address" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="phone_number" name="phone_number" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Confirm Password</label>
                                        <input type="confirm_password" name="confirm_password" className="form-control" value="" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>

                                    </div>


                                </form>

                            </div>

                        </div>

                    </div>

                </div>



            </div>


        </div>
    )
}

export default Register;
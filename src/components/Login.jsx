import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="modal fade" id="login" aria-hidden="true" aria-labelledby="loginLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 py-1 my-2"><i className='fa fa-google me-1'></i> Login with Google</button>
                            <button className="btn btn-primary w-100 py-1 my-3"><i className='fa fa-facebook me-1'></i> Login with Facebook</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="password" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="w-100 btn btn-outline-primary py-1">Submit</button>
                            </form>

                            <div className="d-flex justify-content-between my-2" style={{ height: "25px" }}>
                                <p className='text-warning'>Not registered yet?</p>
                                <span className="text-primary m-0" data-bs-target="#signUp" data-bs-toggle="modal" data-bs-dismiss="modal"><i className="fa fa-user-plus" aria-hidden="true"></i> Sing-up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="signUp" aria-hidden="true" aria-labelledby="signUpLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpLabel">Sign-up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 py-1 my-2"><i className='fa fa-google me-1'></i> Sign in with Google</button>
                            <button className="btn btn-primary w-100 py-1 my-3"><i className='fa fa-facebook me-1'></i> Sign in with Facebook</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control form-control-sm" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email1" className="form-label">Email address</label>
                                    <input type="email" className="form-control form-control-sm" id="email1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password2" className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="password2" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                    <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
                                </div>
                                <button type="submit" className="w-100 btn btn-outline-primary py-1">Submit</button>
                            </form>

                            <div className="d-flex justify-content-between my-2" style={{ height: "25px" }}>
                                <p className='text-warning'>Already registered?</p>
                                <span className="text-primary m-0" data-bs-target="#login" data-bs-toggle="modal" data-bs-dismiss="modal"><i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary my-3 my-lg-0" data-bs-toggle="modal" href="#login" role="button">Login</a>
        </>
    )
}

export default Login
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../SignUp/SignUp.css'


import sarahImg from '../../assets/img/Sarah L.svg'
import backwardArrow from '../../assets/img/backward_arrow.svg'
import forwardArrow from '../../assets/img/forward_arrow.svg'
import loginArrow from '../../assets/img/login_arrow.svg'
import googleLogo from '../../assets/img/google_logo.svg'
import { useAuth } from '../../utils/AuthContext'




function Login() {
    const { user, loginUser } = useAuth()
    //Add loginForm ref
    const loginForm = useRef(null)

    //Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value

        const userInfo = { email, password }

        loginUser(userInfo)

        // const navigateHome = useNavigate();
        // navigateHome('/home')
    }
    return (
        <div className='bg-light '>
            <div className='hero_section container bg-light mb-5'>
                <div className='main_container modal-body row d-flex justify-content-between'>
                    <section className="col-md-6 d-flex flex-column">
                        <div className="testimonial_description p-3">
                            <span className="h1">Students Testimonials</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tempus
                                tincidunt etiam eget elit id imperdiet et. Cras eu
                                sit dignissim lorem nibh et. Ac cum eget habitasse
                                in velit fringilla feugiat senectus in.
                            </p>
                        </div>
                        <div className="comments_container bg-white">
                            <p className="p-4">The web design course provided a solid
                                foundation for me. The instructors were
                                knowledgeable and
                                supportive, and the interactive learning environment
                                was engaging. I highly recommend it!</p>
                            <div className="profile_container border-top p-4 
                      d-flex justify-content-between ">
                                <div
                                    className="profile  d-flex gap-3 align-items-center">
                                    <img src={sarahImg} alt="avatar" />
                                    <p className="mt-3">Sarah L</p>
                                </div>
                                <button
                                    className="read_more_button rounded  border-0 fw-medium p-3">Read
                                    Full Story</button>
                            </div>
                        </div>
                        <div className="button_container align-self-end mt-3">
                            <button className="bg-white rounded border-0 p-3 "><img
                                src={backwardArrow} /></button>
                            <button className="bg-white rounded border-0 p-3 ms-2"><img
                                src={forwardArrow} /></button>
                        </div>
                    </section>
                    <form onSubmit={handleSubmit} ref={loginForm}
                        className=" col-md-5 border order-first order-md-1 bg-white d-flex flex-column gap-3 p-4 rounded">
                        <span className="h3 text-center"><b>Login</b></span>
                        <p className="create_account text-center">
                            Welcome back! please login to your account.
                        </p>
                        <div className="form-group">
                            <label for="exampleInputEmail"><b>Email</b> </label>
                            <input type="email" className="form-control p-3" name='email'
                                id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword"><b>Password</b></label>
                            <input type="password" className="form-control p-3" name="password"
                                id="exampleInputPassword" placeholder="Password" required />
                        </div>
                        <div className="form-group d-flex gap-2 justify-content-end ">
                            <a href="#" className="forgot_password text-secondary text-decoration-none">forgot password ? </a>
                        </div>
                        <div className="form-group d-flex gap-2">
                            <input type="checkbox" />
                            <label className='text-secondary fw-medium'>Remember me</label>
                        </div>
                        <button type="submit"
                            className="sign_up_submit_button border-0 rounded w-100 text-white mb-2 p-3">Login</button>
                        <div className="border-0 border-bottom pb-3 text-center position-relative">
                            <span className="position-absolute top-100 translate-middle bg-white p-2">Or</span>
                        </div>
                        <button type="submit"
                            className="google_sign_up_button border-0 rounded w-100 mt-2 p-3"><img
                                src={googleLogo} className="pe-3" />Login Up with Google</button>
                        <div className="form-link">
                            <p className="text-center">Don't have an account?
                                <Link to="signup" className="text-black"> Sign Up
                                    <img src={loginArrow} alt="login" />
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
  const {createUser} =useContext(AuthContext)
  const navigate = useNavigate();
    const handleSignUp=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);
        createUser(email,password)
        .then(result=>{
          const user = result.user;
          form.reset();
          navigate('/courses');
        })
        .catch(err=>console.error(err));

    }
    return (
        <div>
            <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
          <div className="text-center lg:text-left w-3/5">
            <p className="py-6">
            <img src={"https://i.ibb.co/st6McrG/close-up-of-hands-with.webp"} alt="Shoes" />
            </p>
          </div>
          <div className="card py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
                 <h1 className="text-5xl font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name='email'
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name='password'
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />                
              </div>
              <div className="form-control mt-6">                
                <input type="submit" className="btn btn-primary" value="SignUp" />
              </div>
            </form>
            <p className='p-3'>Already have an account?<Link className="text-warning font-bold text-2xl" to='/loginUser'> Login </Link></p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SignUp;
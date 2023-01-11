import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const LoginUser = () => {
  const {signInUser} =useContext(AuthContext);
  const navigate = useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email,password)
        .then(result=>{
          const user = result.user;
          form.reset();
          navigate('/');
        })
        .catch(err=>console.error(err));
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
          <div className="text-center  w-4/5">
            <p className="py-6">
            <img className="rounded-xl" src={"https://i.ibb.co/s5XBcyp/e-learning-image-csp35689170.webp"} alt="Shoes" />
            </p>
          </div>
          <div className="card py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                 <h1 className="text-5xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
            </form>
            <p className="p-2">New to <span className=" text-green-600 text-2xl ">E-learning !!</span>  <Link className="text-warning font-bold" to='/signup'>Sign Up </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
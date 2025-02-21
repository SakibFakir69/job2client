import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {

    const goHome = useNavigate()
    console.log(goHome)

    

    const handelSubmmit = (e) =>{
        e.preventDefault();
        goHome('/')
       
    }


  return (
    <section className="w-full border min-h-screen  ">

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex items-center justify-center mx-auto mt-20">

        <form className="card-body" onSubmit={handelSubmmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;

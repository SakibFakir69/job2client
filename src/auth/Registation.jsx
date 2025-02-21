import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Myproviderapi } from "../context/ContextProvider";
import {toast,ToastContainer } from 'react-toastify'
function Registation() {

  const { createUserWithPassword , setuser ,setloading} = useContext(Myproviderapi);


  const handelSubmmit = (e) => {
    e.preventDefault();

    const info  = new FormData(e.target);
    const info_form = Object.fromEntries(info);

    const {email , password}  = info_form;

    if(!email )
    {
      toast.error("Enter your email")
      return;

    }
    if(!password)
    {
      toast.error("enter your password")
      return ;

    }

    createUserWithPassword(email,password)
    .then((res)=>{
      setloading(true);

      const user = res.users ;
      if(user)
      {
        setuser(user)
        setloading(false);
      }

    })
    .catch((error)=>{
      console.log("error founed reg",error.message)
    })

  


  };


  return (
    <div className="bg-stone-200">
      <section className="w-full border min-h-screen  ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex items-center justify-center mx-auto mt-20">
          <ToastContainer/>

          <div className="p-2">
            <h2 className="text-xl font-semibold">Registation Now</h2>
          </div>
          <form className="card-body" onSubmit={handelSubmmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name.."
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* name */}


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
              <button type="submit" className="btn btn-primary">Registation Now</button>
            </div>
          </form>

          <div>
            <p className="-mt-4 p-3">
              You have account {" "}
              <NavLink className={'text-green-400 hover:text-red-400 m'} to={"/authlayouts/Login"}>Login</NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registation;

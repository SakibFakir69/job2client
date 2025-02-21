import React, { useContext } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import { Myproviderapi } from "../context/ContextProvider";
import {toast,ToastContainer } from 'react-toastify'
import UseApi from "../api/UseApi";

function Registation() {

  const useaxiosapi = UseApi();

  const Gohome = useNavigate();

  const { UserWithPasswordRegistation  , setuser ,setloading,siginINWithGoogle} = useContext(Myproviderapi);



  const handelSubmmit =async (e) => {
    e.preventDefault();

    const info  = new FormData(e.target);
    const info_form = Object.fromEntries(info);

    const {email , password}  = info_form;
    console.log(info_form);

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

    const users={
      email:email,
      password:password,
    }

    UserWithPasswordRegistation (email,password)

    .then((res)=>{
      setloading(true);

      const user = res.user ;
      console.log(res);
      if(user)
      {

        useaxiosapi.post('users',users)
        .then((res)=>{
          console.log(res);

        })
        .catch((error)=>{
          console.log(error);
        })




        setuser(user)
        setloading(false);
        Gohome('/')



      }

    })
    .catch((error)=>{
      console.log("error founed reg",error.message)
    })

  


  };

  const googleButton = () =>{
    setloading(true);

    siginINWithGoogle()
    .then((res)=>{
      const user = res.user ;
      if(user)
      {
        setuser(user);
        setloading(false);
        Gohome('/')
      }

    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  



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

          <div className="mb-2 -mt-3">
          <button
          onClick={googleButton}
                className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200 shadow-xl cursor-pointer">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                     className="w-[23px]"/>
                Sign in with Google
            </button>
          </div>

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

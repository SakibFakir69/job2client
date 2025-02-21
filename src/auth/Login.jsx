import React, { use, useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Myproviderapi } from "../context/ContextProvider";

function Login() {
  const { setloading, siginINWithGoogle ,loginWithEmailandpassword  , setuser} = useContext(Myproviderapi);

  const goHome = useNavigate();
  console.log(goHome);

  const handelSubmmit = (e) => {
    e.preventDefault();
    goHome("/");

    const info = new FormData();
    const info_data = Object.fromEntries(info);
    const {name ,email } = info_data;

    setloading(true);


    loginWithEmailandpassword(name,email)

    .then((res)=>{

      const user =res.user ;
      if(user){
        setuser(user);
        setloading(false);
        goHome("/")
      }
    })


  };

  const gogleButton = ()=>{

    setloading(true);
    
    siginINWithGoogle()
    .then((res)=>{
      const user =res.user;
      if(user)
      {
        setuser(user);
        setloading(false);
        goHome("/")
      }
    })
  }

  return (
    <section className="w-full border min-h-screen  ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex items-center justify-center mx-auto mt-20 border border-stone-200">


        <div>
          <h2 className="text-xl font-semibold">Login Now</h2>
        </div>
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

        <div>
        <button
        onClick={gogleButton}
                className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                     className="w-[23px]"/>
                Sign in with Google
            </button>
        </div>

        <div  className="p-2">
          <p>
            You have no account {" "}
            <NavLink to={"/authlayouts/registation"} className={'text-green-400'}>Registation</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

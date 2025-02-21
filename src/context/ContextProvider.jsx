




import React, { createContext, useContext, useEffect, useState } from 'react'
import { Auth } from '../firebase/config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export const Myproviderapi = createContext();

function ContextProvider({children}) {




    const [ loading , setloading ] = useState(true);
    const [ user , setuser ] = useState(null);



    const  UserWithPasswordRegistation = (email , password)=>{

        return createUserWithEmailAndPassword(Auth,email, password)
    }

    const Provider = new GoogleAuthProvider();

    const siginINWithGoogle = ()=>{

        return signInWithPopup(Auth,Provider)

    }

    // login 

    const loginWithEmailandpassword = (email , password)=>{
        return signInWithEmailAndPassword(Auth,email,password);
    }

    // log out

    const logoutbutton = () =>{
        return signOut(Auth)
    }





    const authInfo={
        UserWithPasswordRegistation ,
        siginINWithGoogle ,setuser,setloading,
        loginWithEmailandpassword,logoutbutton,user

    }

    useEffect(()=>{

        const subcribe = onAuthStateChanged(Auth, (currentUser)=>{
            console.log(currentUser);

     
            setuser(currentUser)
        
        setloading(false);

        })

        return ()=>  subcribe();
    },[])


    



  return (
    <div>
        <Myproviderapi.Provider value={authInfo}>
            {children}

        </Myproviderapi.Provider>


    </div>
  )
}

export default ContextProvider
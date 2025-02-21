




import React, { createContext, useContext, useState } from 'react'
import { Auth } from '../firebase/config';
import { GoogleAuthProvider, ProviderId, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
export const Myproviderapi = createContext();

function ContextProvider({children}) {


    const [ loading , setloading ] = useState(false);
    const [ user , setuser ] = useState(null);



    const  createUserWithPassword = (email , password)=>{
        return signInWithEmailAndPassword(email, password)
    }
    const Provider = new GoogleAuthProvider();
    const siginINWithGoogle = ()=>{

        return signInWithPopup(Auth,Provider)

    }





    const authInfo={
        createUserWithPassword,
        siginINWithGoogle 

    }


    



  return (
    <div>
        <Myproviderapi.Provider value={authInfo}>
            {children}

        </Myproviderapi.Provider>


    </div>
  )
}

export default ContextProvider
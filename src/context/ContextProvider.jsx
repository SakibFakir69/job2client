




import React, { createContext, useContext, useState } from 'react'
import { Auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
export const Myprovider = createContext();

function ContextProvider({children}) {


    const [ loading , setloading ] = useState(false);
    const [ user , setuser ] = useState(null);



    const  createUserWithPassword = (email , password)=>{
        return signInWithEmailAndPassword(email, password)
    }





    const authInfo={
        createUserWithPassword,

    }


    



  return (
    <div>
        <Myprovider.Provider value={authInfo}>
            {children}

        </Myprovider.Provider>


    </div>
  )
}

export default ContextProvider
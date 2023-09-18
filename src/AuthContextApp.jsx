import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "./firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthContextApp({children}) {

  const [userFullDetails, setUserFullDetails] = useState(null);

  const [loader,setLoader] = useState(true);

  const registerUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut =()=>{
    return signOut(auth);
  }

  useEffect(()=>{
    const authFunc = onAuthStateChanged(auth, (user)=>{
      if(user){
        //console.log(user);
        setUserFullDetails(user);
        setLoader(false);
      }else{
        console.log("User Not Found");
        setLoader(false);
        setUserFullDetails(null)
      }
    })
    return(()=>{
      authFunc();
    })
  },[])

  const userDeatils = {
    loader,
    userFullDetails,
    registerUser,
    loginUser,
    logOut
  }



  return (
    <AuthContext.Provider value={userDeatils}>
      {children}
    </AuthContext.Provider>
  )
}

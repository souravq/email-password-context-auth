import { useContext } from "react"
import { AuthContext } from "../AuthContextApp"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
    const {loader,userFullDetails} = useContext(AuthContext);
    if(loader){
        return "Loading....."
    }
    if(userFullDetails){
        return (
            <div>{children}</div>
          )
    }else{
        return <Navigate to="/login"></Navigate>
    }

  
}

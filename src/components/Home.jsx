import { useContext } from "react"
import { AuthContext } from "../AuthContextApp";

export default function Home() {

    let {loader,userFullDetails} = useContext(AuthContext);
    if(loader){
      return "loading...";
    }

  return (
    <div> 
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"150px"}}>
            <h2>Welcome {userFullDetails && userFullDetails.email} !!!!!</h2>
        </div>
    </div>
  )
}

import { useContext } from "react";
import { AuthContext } from "../AuthContextApp";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {

  const {loginUser,userFullDetails} = useContext(AuthContext);

  const naviate = useNavigate();

  if(userFullDetails){
    return(
      <Navigate to="/"/>
    )
  }


    const handleLoginData=(event)=>{
        event.preventDefault();

        //console.log(event);
        let formData = event.target;

        let email = formData.email.value;
        let password = formData.password.value;

        //console.log(email, password);

        loginUser(email,password)
        .then((result)=>{
          console.log(result);
          formData.reset()
          naviate("/");
          
        })
        .catch((error)=>{
          console.log(error);
        })

    }

  return (
    <div className="hero min-h-screen bg-base-200" style={{minHeight:"90vh"}}>
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginData} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

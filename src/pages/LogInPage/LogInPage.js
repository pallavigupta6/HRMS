import React, { useState } from "react";
import profile from "../../component/image/profile1.png";
import { Link } from "react-router-dom";
import data from "../../db.json";
import "./LoginPage.css";
import { Button } from '@material-ui/core';
console.log(data);

function LogInPage() {
    const [empid, setEmpId] = useState();
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassWord] = useState();
    const loginHandler = () => {
      let index = data.Data.findIndex((item) => item.id === empid);
      if (index > -1) {
        if (data.Data.password === password) setAuthenticated(true);
        else {
          setAuthenticated(false);
          alert("wrong password");
        }
      } else {
        window.alert("Login Successfully");
      }
    };
    return (
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div className="hello">
              <h1 ><b>Login Page</b></h1>
              <div>
                {/* <img src={email} alt='email' className='email'/> */}
                {/* <label>User id</label> */}
                <input
                  type="email"
                  placeholder="       Employee id"
                  className="name"
                  onChange={(e) => setEmpId(e.target.value)}
                />
              </div>
              <div>
                {/* <img src={password} alt='password' className='email'/> */}
                <input style={{marginTop:'5px'}}
                  type="password"
                  id='pass'
                  placeholder="       Password"
                  className="name"
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
              <Button onClick={loginHandler} className="bordering">
                {authenticated || true || (empid && password) ? <Link to="/Dashboard" >Login</Link> : "Login"}
              </Button>
              <div>
              Don't Have an Account? <Link to="/signup">Signup </Link></div>
              {/* <div className="loginto">
                <Link to="/Profile"></Link>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LogInPage;
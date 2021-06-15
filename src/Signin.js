import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Firebase";
import { AuthContext } from "./Auth";
import "./SignIn.css"
const Login = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/shop-products");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/" />;
    }


    return (
        <div className="container">
        <div className="col-12 formcontainer">
          <h1 className="text-center">Signup to start buying our products!</h1>
          <form className="form" onSubmit={handleLogin}>
          <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
            <br/>
            <br/>
            <button
              type="submit"
              
            >
             Sign In
            </button>
          </form>
        </div>
      </div>
      );
    };
    
    export default withRouter(Login);
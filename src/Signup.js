import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./Firebase"
import "./Signup.css"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/shop-products");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="container">
      <div className="col-12 formcontainer">
        <h1 className="text-center">Signup to start buying our products!</h1>
        <form className="form" onSubmit={handleSignUp}>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
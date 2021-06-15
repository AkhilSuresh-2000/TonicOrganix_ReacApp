import React from "react";
import Product from "./Product";
import Banner from "./banner.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col-12 text-dark p-2 header">
            <br/>
            <p className="h3">WELCOME TO</p>
            <p className="h1 fw-bolder fs-1 m-4">Tonic Organix</p>
          </div>
        </div>
        <div className="row text-center second">
          <div className="col-md-6 col-xs-12">
            <img className="img-fluid" src={Banner} alt="" width="100%"/>
          </div>
          
          <div className="col-md-6 col-xs-12 d-flex justify-content-center align-items-center minimal-green-bg">
            <div className="flex-column p-3">
              <h1 className="fw-bolder">
                <span className="text-light cursivefont">The All In One Organic</span>
                <br />
                <span className="text-light cursivefont"> Body Bar from Tonic !</span>
              </h1>
              <p className="m-3 p-3">
                Discover our body bars. Organic shampoo, conditioner and body
                wash all in one bar.
              </p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="prod-wrapper">
            <Product />
        </div>
        <div className="row text-center minimal-green-bg p-5 mt-5">
        <div className="col-12">
            <h1>JOIN THE BAR CLUB</h1>
            <form>
          <label htmlFor="emailaddress">Enter your email address to subscribe to our newsletter</label>
          <input
            className="form-control m-3"
            type="input"
            name="emailaddress"/>
          <button type="submit" className='btn btn-dark'>Submit</button>
        </form>
        </div>
        </div>
      </div>
    </>
  );
}

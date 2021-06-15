import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useCart } from "react-use-cart";


export default function Shop() {
  const [somedata, setData] = useState([]);
  const { addItem, cartTotal  } = useCart();
  function Cart() {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
      useCart();

    if (isEmpty) return <p className="cart_bg">Your cart is empty</p>;

    return (
      <>
        <div className="row cart_box">
          <h2>Cart ({totalUniqueItems})</h2>
          <ul className="cart_ul">
            {items.map((item) => (
              <li key={item.id} className="cart_li">
                {item.quantity} x {item.title}
                <div>
                  <img
                    className="img-fluid"
                    src={item.photo.url}
                    width="100px"
                    alt=""
                  />
                </div>
                <button
                  className="btn btn-info"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <h2>Total {cartTotal} CAD</h2>
          <Link to="/checkout"><button className="btn btn-info">Checkout</button></Link>
        </div>
      </>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://hadibkapi.herokuapp.com/phones/");
      setData(result.data);
    };

    fetchData();
  }, []);
  console.log(somedata);

  if (!setData) return <p>Loading please wait...</p>;
  else
    return (
      <div className="container">
        <div className="row d-flex justify-content-between">
          <Cart />
          {somedata.map((items) => {
            return (
              <div key={items._id} className="col-md-3 col-12 my-2">
                <div className="card h-100">
                  <button
                    className="btn btn-light"
                    onClick={() => addItem(items)}
                  >
                    Add to Cart
                  </button>

                  <img className="card-img-top" src={items.photo.url} alt="" />
                  <div className="card-body text-center">
                    <h3 className="card-title m-2">{items.title}</h3>
                    <p className="card-text">{items.description}</p>
                    <span className="card-text border p-3 m-2">
                      <b>CAD {items.price} $</b>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

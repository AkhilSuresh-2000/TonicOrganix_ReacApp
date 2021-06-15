import React,{ useState, useEffect } from "react";
import axios from 'axios';

export default function Product() {
  const [somedata, setData] = useState([]);

  


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hadibkapi.herokuapp.com/phones/',
      ); 
      setData(result.data);
    };
 
    fetchData();
  }, []);
  console.log(somedata)

  if (!setData) return (<p>Loading please wait...</p>);
  else
    return (
      <div className="container">
        <div className="row d-flex justify-content-between">
          {somedata.map((items) => {
            return (
              <div key={items._id} className="col-md-3 col-6 my-2">
                  <div className="card h-100 scalo">
                    <img
                      className="card-img-top"
                      src={items.photo.url}
                      alt=""
                    />
                    <div className="card-body text-center">
                      <h3 className="card-title m-2">{items.title}</h3>
                      <p className="card-text">{items.description}</p>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>      
    );
}
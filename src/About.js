import React from 'react'

export default function About() {
    return (
        <div className="container">
        <div className="row mt-4">
            <hr/>
            <div className="col-12">
                <h2>Full Stack React Application</h2>
                <b>The latest HeadlessCMS technology</b>
                <p>Built using ReactJS, Strapi(hosted on DigitalOcean) and Graphql.</p>
            </div>
            <hr/>
            <div className="col-12">
                <h2>Fetches Data from a backend server</h2>
                <p>Uses Graphql along with Apollo Client to securely to fetch from the Strapi backend, also caches the fectched data to reduce number of requests received.</p>
            </div>
            <hr/>
            <div className="col-12">
                <h2>Easy to use Admin Interface(Backend)</h2>
                <p>Admins can login to the backend using a password and add new products or edit existing products. The changes will be automatically shown in the frontend react application.</p>
            </div>
            <hr/>
            <div className="col-12">
                 <h2>Reusable Components(React Frontend)</h2>
                 <p>Navigation, Products page and Footer are reusable components, the Products page fetches data from Strapi.</p>
            </div>
            <hr/>
            <div className="col-12">
                 <h2>Fully Responsive Design</h2>
                 <b>Bootstrap 5.0 alpha - responsive design and CSS Flexbox</b>
                 <p>Optimized for all devices, tablets and smartphones.</p>
            </div>
            <hr/>
        </div>
        </div>
    )
}

import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <a href="#">Report</a>
                <a href="https://neobis-front-themeal-mu.vercel.app/" target="_blank">Homepage</a>

            </div>
        </div>
    );
};

export default NotFound;
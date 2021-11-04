import React from 'react';
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <div className="h-25" >
         {/* Footer */}
        <footer className="bg-dark text-center text-white ">
          {/* Grid container */}
          <div className="container p-4 ">
            {/* Section: Social media */}
            <section className="mb-4 ">
              {/* Facebook */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
              {/* Twitter */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
              {/* Google */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
              {/* Instagram */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
              {/* Linkedin */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
              {/* Github */}
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
            </section>
          </div>
     
        </footer>

        </div>
    );
};

export default Footer;
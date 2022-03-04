import React from 'react';
import "./Footer.css";
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
 <div className="footer">
        <div className="container my-5">

            <footer className="text-center text-lg-start">
                {/* <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon network="twitter" bgColor="#ff5a01" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://linkedin.com/in/jaketrent" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://jaketrent.com" network="tumblr" />
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                    <SocialIcon url="https://www.example.com" label="Our portfolio" />
                    </button>
                </div> */}
 {/* .............................edited..................................... */}

                <div className="row">
        <div className="col-lg-3 col-md-6 footer-info">
          <img src="./logo.png" alt="TheEvenet" />
        
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          
           <h4>ICT ACADEMY HQ</h4>
          <p>
          G1,Ground Floor, Thejaswini Building,<br />
          Technopark,Thiruvananthapuram,<br />
          Kerala, India.<br />
          <strong>Mobile:</strong> 7594051437<br />
            <strong>Phone:</strong> 0471 270 0811<br />
            
          </p>
         
        </div>
        
              <div className="col-lg-3 col-md-6 footer-contact">
          <h4>ICT ACADEMY-CENTRAL REGION</h4>
          <p>
          Ground Floor,Rajamally Building,<br />
          Infopark, Koratty,<br />
          Thrissur, Kerala, India.<br />
         
            <strong>Phone:</strong> 7594051437 /+91-481-2731050<br />
           
          </p>
         
        </div>
        <div className="col-lg-3 col-md-6 footer-contact">
          <h4>ICT ACADEMY-NORTH REGION</h4>
          <p>
          2nd Floor, Ul Cyberpark Building, <br />
          Nellikode PO, Kozhikode,<br />
          Kerala, India.<br />
          
            <strong>Phone:</strong> 7594051437 /+91-495-2431432<br />
            
          </p>
          <div className="social-links">
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="google-plus"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
        
      </div>

 {/* .......................................................................... */}
 
{/* ......................................................................... */}

                <div class="text-center text-white p-3">
                <div className="copyright">
     Copyright  ©  <strong>ICTAK Academy Team Five </strong>. All Rights Reserved
    </div>
                {/* Copyright © ICTAK Team Five  */}
                    {/* <a class="text-white" href="#">ICT Academy of Kerala</a> */}
                </div>
            </footer>
        </div>
        </div> 
    // .........................................................................
        
    
    // ............................................................................
    );
};

export default Footer;
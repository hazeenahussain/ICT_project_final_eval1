import React from 'react';
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="page">
            <h2 >ICTAK<br /> HALL BOOKING PORTAL</h2>
            {/* <h1 className="mb-4 pb-0">ICTAK<br /><span>Hall Booking</span> Portal</h1> */}
            
            <Carousel>
                <div>
                    <img className='pic' src="./hero-bg.jpg" />
                    
                </div>
                <div>
                    <img className='pic' src="./ict2.jpg" />
                   
                </div>
                <div>
                    <img className='pic' src="./6.jpg" />
                    
                </div> 
                {/* <div>
                    <img className='pic' src="./hero-bg1.jpg" />
                   
                </div>
                <div>
                    <img className='pic' src="./ict1.jpg" />
                   
                </div>
                <div>
                    <img className='pic' src="./ict4.jpg" />
                   
                </div> */}
            </Carousel>
            
            <p>
            ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.This blog is an Online Hall Booking Portal for ICTAK where Associates can book a conference room prior to their meeting on a particular day and time.
            </p>
            <h2>Our Key Focus Areas</h2>
            {/* With the advanced internet infrastructure built by JIO and a robust physical retail business built by Reliance Retail, we’re creating a differentiated e-commerce model for India through AJIO.  */}

            <li>Industry focused enablement programmes for Faculty members.</li>
            <li>Industry focused ICT Skills development programmes for Students.</li>
            <li>Project assignments related to capability building for Institutions and Corporate.</li>
            <li>Creating Intellectual Property on niche skill areas and emerging technologies. </li>
           
            

        </div>

    // .............................................................
  
    // ...............................................................
    );
};

export default Homepage;
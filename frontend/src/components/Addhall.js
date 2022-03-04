import React from 'react';
import "./AddArticle.css";
import axios from 'axios';
import MyForm from './DbForm';
import { useNavigate } from "react-router-dom";

const Addhall = () => {
    let navigate = useNavigate();
    var [myvalue, setmyValue] = MyForm({ username: "", title: "", associatename: "" })
    const bookhall= () => {
        console.log(myvalue)
        axios.post("http://localhost:3005/api/add", myvalue).then(
            (res) => {
                alert("Successfully Added Article")
                
                navigate("../Bookinglist", { replace: true })//......edited....
                console.log("in axios post" + res.data)

            }
        )
    }
    return (
// ....................................................
        // <div className="container">
        //     <div className="row">
        //         <h1>Register Associates</h1>
        //     </div>
        //     <div className="row">
        //         <h4><center>Register here !!!!!</center></h4>
        //     </div>
        //     <div className="row input-container">
        //         <div className="col-xs-12">
        //             <div className="styled-input ">
                    
        //                 <input type="text" required name="username" value={myvalue.username} onChange={setmyValue} />
        //                 <label>Username</label>
        //             </div>
        //         </div>
        //         <div className="col-md-6 col-sm-12">
        //             <div className="styled-input">
        //                 <input type="text" required name="title" value={myvalue.title} onChange={setmyValue} />
        //                 <label>Associate Name</label>
        //             </div>
        //         </div>

        //         <div className="col-xs-12">
        //             <div className="styled-input wide">
        //                 <textarea required name="content" value={myvalue.content} onChange={setmyValue}></textarea>
        //                 <label>Product Details</label>
        //             </div>
        //         </div>
        //         <div className="col-xs-12">
        //             <div className="btn-lrg submit-btn" onClick={addArticles}>Add Product</div>
        //         </div>
        //     </div>
        // </div>
// .........................newwwwww........................................
<div>
 <section id="contact" className="section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Book a Hall </h2>
      {/* <p>Associate</p> */}
    </div>
    <div className="row contact-info">
      <div className="col-md-4">
        <div className="contact-address">
          {/* <i className="bi bi-geo-alt" /> */}
          {/* <h3>Address</h3> */}
       
          {/* <address>A108 Adam Street, NY 535022, USA</address> */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-phone">
          {/* <i className="bi bi-phone" /> */}
          {/* <h3>Phone Number</h3> */}
          {/* <img src="assets/img/logo ict.png"  alt title /> */}
          {/* <p><a href="tel:+155895548855">+1 5589 55488 55</a></p> */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-email">
          {/* <i className="bi bi-envelope" /> */}
          {/* <h3>Email</h3> */}
          {/* <p><a href="mailto:info@example.com">info@example.com</a></p> */}
        </div>
      </div>
    </div>
    <div className="form">
      {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form" > */}
      <form  className="php-email-form" >
        
      <div className="form-group mt-3">
        <h6> ICTAK ID</h6>
          <input type="text" className="form-control" name="title"  placeholder="Enter ICTAK ID"  value={myvalue.title} onChange={setmyValue}/>
        </div>

        <div className="form-group mt-3">
            <h6> Username</h6>
          <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username" value={myvalue.username} onChange={setmyValue}/>
        </div>


        <div className="form-group mt-3">
            <h6> Associate Name</h6>
          <input type="text" className="form-control" name="associatename" id="username" placeholder="Enter Associate Name" value={myvalue.associatename} onChange={setmyValue}/>
        </div>

        {/* <div className="form-group mt-3">
        <h6> Hall Name</h6>
          <input type="text" className="form-control" name="course"  placeholder="Enter Course"  value={myvalue.course} onChange={setmyValue}/>
        </div> */}

        {/* <div className="form-group mt-3">
        <h6> Date</h6>
          <input type="text" className="form-control" name="contactnumber"  placeholder="Enter Contact Number"  value={myvalue.contactnumber} onChange={setmyValue}/>
        </div> */}

        {/* <div className="form-group mt-3">
        <h6> Time Duration</h6>
          <input type="text" className="form-control" name="contactnumber"  placeholder="Enter Contact Number"  value={myvalue.contactnumber} onChange={setmyValue}/>
        </div> */}
        
        
        <div className="my-3">
          
          <div className="error-message" />
          {/* <div className="sent-message">Your message has been sent. Thank you!</div> */}
        </div>
        {/* <div className="text-center"><button type="submit"  onClick={addArticles} >Submit</button></div> */}
        <div className="btn-lrg submit-btn" onClick={bookhall}>Submit</div>
      </form>
    </div>
  </div>
</section>

        </div>

// ........................................
    );
};

export default Addhall;
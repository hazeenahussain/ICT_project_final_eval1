
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./articlelist.css";

const ArticlesList = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        articleData();
    }, []);

    function articleData() {
        axios.get("http://localhost:3005/api/view")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    function updateArticle(event) {
        var id = event.target.getAttribute("name");
        console.log("in update", id)
        var s = `../updatearticle/${id}`;
        console.log(s)
        navigate(s, { replace: true })
    }
    function deleteArticle(event) {
        console.log(event.target.getAttribute("name"))
        axios.post("http://localhost:3005/api/delete", { title: event.target.getAttribute("name") })
            .then((res) => {
                alert("Successfully Deleted");

                navigate("../", { replace: true })

            }
            )
    }

    return (
        <>

            {Data.map((article, key) => (
                
                // <div className='articlelist'>
                //     <Link  className="l" key={key} to={`/articlelist/${article._id}`}>

                //         <h2>ICTAK ID : {article.title}</h2>
                //         <h3>UserName : {article.username}</h3>
                //     </Link>
                //     <button name={article._id} onClick={updateArticle}>Edit</button>
                //     <button name={article.title} onClick={deleteArticle}>Delete</button>
                // </div>
// .....................................................
<div className="card">
<div className="card-header">
  {/* <h3 className="card-title">List of Associates</h3> */}
  <div className="card-tools">
    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
      <i className="fas fa-minus" />
    </button>
    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
      <i className="fas fa-times" />
    </button>
  </div>
</div>
<div className="card-body p-0">
<Link  className="l" key={key} to={`/articlelist/${article._id}`}>
  <table className="table table-striped projects">
    <thead>
      <tr>
        
        <th style={{width: '20%'}}>
           ICTAK Id 
        </th>
        <th style={{width: '30%'}}>
          Name
        </th>
        <th style={{width: '30%'}}>
          Username
        </th>
        <th style={{width: '30%'}}>
          Course
        </th>
        <th style={{width: '30%'}}>
          Contact Number
        </th>
      
      </tr>
    </thead>
    {/* <Link  className="l" key={key} to={`/articlelist/${article._id}`}> */}
    <tbody>
      <tr>
      <td>
      {article.title}
        </td>
        
        <td className="project_progress">
        {article.content}
        </td>
       
        <td className="project_progress">
        {article.username}
        </td>

        <td className="project_progress">
        {article.course}
        </td>

        {/* .......................nwwwwwwwwwwwww............................... */}
        {/* <td className="project_progress">
        {article.associatename}
        </td> */}

       

        

        {/* <td className="project_progress">
        {article.contactnumber}
        </td> */}
        {/* ................................................ */}
        <td className="project-actions text-right">
               
                <a className="btn btn-info btn-sm" href="#" name={article._id} onClick={updateArticle}>
                  <i className="fas fa-pencil-alt">
                  </i>
                  
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#" name={article.title} onClick={deleteArticle}>
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </a>
              </td> 
              {/* <button name={article._id} onClick={updateArticle}>Edit</button>
                     <button name={article.title} onClick={deleteArticle}>Delete</button> */}
      </tr>
      </tbody>
      {/* </Link> */}
        </table>
        </Link>
        </div>
      
    </div>
   
// ..................................................

            ))}


        </>
    );
}
export default ArticlesList;
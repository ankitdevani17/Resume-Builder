import React from 'react'
import "../Styles/Profile.css";

const ShowData = ({handleShow,handleData,
    SetName, SetEmail ,SetBio ,Name,Email,Bio}

) => {
  return (
<>
<div className="info-area">
        <div className="data-fields">
          <div className=""></div>
          <div className ="data-box">
            <h1 className="data-name">{Name}</h1> 
             <p className ="data-email">{Email}</p>
            </div>
        </div>
        

        <div className="data-fields">
          <div className="input-label">

          </div>
           <div className ="data-box">
<p className ="data-bio">{Bio}</p>
           </div>
        </div>
        <button className="foot-button" onClick ={()=>{
            handleShow();
            handleData();

        }}>
          Edit
        </button>

        {/* <button className="btn-save btn-edit">
          Edit
        </button> */}
      </div>
   
      <div className="info-area">
        <div className="input-label"></div>
        {/* <textarea className="input-box text-area" onChange={SetBio}/> */}
      </div>
</>
  )}

export default ShowData
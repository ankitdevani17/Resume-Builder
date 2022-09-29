import React from 'react'
import {useState} from "react";

const ShowForm = ({handleShow,handleData,
    SetName, SetEmail ,SetBio ,Name,Email,Bio

}) => {
  return (
   <>
    <div className="info-area">
        <div className="input-fields">
          <div className="input-label">Name</div>
          <input type="text" name="Name" id="name" className="input-box" value ={Name} onChange={(e)=>{SetName(e.target.value)}}/>
        </div>
        <div className="input-fields">
          <div className="input-label">Email-ID</div>
            <input type="email" name="Email" id="email" className="input-box" value={Email} onChange ={(e)=>{SetEmail(e.target.value)}}/>
        </div>
        <button className="btn-save" onClick ={()=>{
            handleShow();
            handleData();
        }}>
          Save
        </button> 
        <div style={{display:"inline"}}> <h4>Note : You can always click on image to reupload the image</h4> </div>
        {/* <button className="btn-save btn-edit">
          Edit
        </button> */}
      </div>
      <div className="info-area">
        <div className="input-label">Short Bio</div>
        <textarea className="input-box text-area" value ={Bio} onChange={(e)=>{SetBio(e.target.value)}}/>
      </div>
   </>
  )}

export default ShowForm
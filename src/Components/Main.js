import React from "react";
import {useState} from "react";
import ImageImg from "./InsertImg";
import "../Styles/Profile.css";
import ShowForm from "./ShowForm";
import ShowData from "./ShowData";
const Main = () => {
  const [show, setShow] = useState(true);
  const[data,setData] = useState();
  const [Name,SetName] = useState("");
  const [Email,SetEmail] = useState("");
  const [Bio,SetBio] = useState("");
  const handleShow = () => {
    setShow(!show);
  }
  const handleData = () =>{
    setData(!data);
  }
  return (
    <div className="main-container">
      <div className="image-area">
        <ImageImg />
      </div>
      { show && <ShowForm handleShow={handleShow} handleData={handleData} Name ={Name} Email ={Email} Bio ={Bio} SetName ={SetName} SetEmail={SetEmail} SetBio ={SetBio}/>}
      { data && <ShowData handleShow={handleShow}   handleData={handleData} Name ={Name} Email ={Email} Bio ={Bio} SetName ={SetName} SetEmail={SetEmail} SetBio ={SetBio}/>}
    </div>
  );
};

export default Main;

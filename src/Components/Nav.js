import React from "react";
import "../Styles/Nav.css";
import clip from "../Assets/ClipboardOutlined.svg";
const Nav = ({ data,setList }) => {

  const download = (content) => {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(content)], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "MyResume.json";
    a.click();
  };
  const processData = (file) => {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      var result = JSON.parse(reader.result);
      setList(result);
    };
    reader.onerror = (error) => {
      
    };
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img
            src={clip}
            alt={"Clipboard as Logo"}
            className="header-logo"
          />
          <div className="header-text">Resume Builder</div>
        </div>
        <div className="header-right">
          <input type="file" accept="application/json" id="fileInput" hidden onChangeCapture={(e) => {processData(e.target.files[0])}} />
          <button className="header-btn import" onClick={(e) => { document.getElementById('fileInput').click() }}>Import</button>
          <button
            className="header-btn export"
            onClick={() => {
              download(data);
            }}
          >
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import Up from "../Assets/UploadOutlined.svg";
import { useDropzone } from "react-dropzone";

const InsertImg = () => {
  const [file, setFile] = useState([]); //File State
  const { getRootProps, open, getInputProps } = useDropzone({ //useDropzone Custom Hook from '@react-dropzone
    accept: {
      "image/*": [],
    },
    noClick: true,//Enabled to Allow 
    noKeyboard: true,//Upload Button Along with Dropzone
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile([...file,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )]
      );
    },
  });

// console.log(file);
  //Function to return Thumbnail For Photo is "file" is Set
  const received = file.map((file) => (
    <div key={file.name}>
      <div className="dropzone">
        <img
          src={file[0].preview}
          alt=" "
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          onClick={() => {
            console.log(file);
            console.log("difffff")
            if(file.length==1){
              console.log("y")
              setFile([]);
            }
          }}
          className="dropzone-image"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    //To Avoid Memory Leaks revoke on Unmount
    return () => file.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [file]);
  //Re-Renders as State Changes
  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ display: (file.length === 1 ? "none" : "flex" )}}
      >

        <input {...getInputProps()} />
        <button type="button" onClick={open} className="dropzone-btn">
          <img src={Up} alt="" className="Up" />
          Upload photo
        </button>
      </div>
      {received}
      {/* <div>
       <button onClick ={()=>{
        setFile([]);
       }}> Cancel</button>
      </div> */}
    </>
  );
};
export default InsertImg;

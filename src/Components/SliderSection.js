import React, { useState } from "react";
import SliderClick from "./SliderClick";
import Slider from "./Slider";
import "../Styles/SliderSection.css";

const SliderSection = ({ data, setList, handleRender,index }) => {
  const [mediaSelection, setMediaSelection] = useState("educations");
  const addData = (newData) => {
    data[0][mediaSelection].push(newData);
    setList(data);
    handleRender();
  };
  return (
    <>
    {/* Selecting the Section you want to modify/have a look at */}

      <div className="tab-section-selector">
        <SliderClick
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"educations"}
          btnTitle={"Education"}
          data={data}
        />
        <SliderClick
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"works"}
          btnTitle={"Work Experiences"}
          data={data}
        />
        <SliderClick
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"achievements"}
          btnTitle={"Achievements"}
          data={data}
        />
      </div>
      {/* Selecting the Section you want to modify/have a look at  ( ENDS )*/}


      {/* Adding the data to the selected section */}
      <Slider
        mediaSelection={mediaSelection}
        data={data}
        setList={setList}
        handleRender={handleRender}
        index={index}
        addData={addData}
      />
      {/* Adding the data to the selected section ( ENDS )*/}
    </>
  );
};

export default SliderSection;

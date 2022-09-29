import React, { useState } from "react";

const ModalExpand = ({
  handleModal,
  modalOpen,
  updateEntry,
  addData,
  modalData,
  modalIndex,
  mediaSelection,
  index,
  isEdit,
  setIsEdit,
  isNew,
  setIsNew

}) => {
  const [heading, setHeading] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [subHeading, setSubheading] = useState(null);
  const [description, setDescription] = useState(null);
  const newRecord = {
    heading: heading,
    start_date: startDate,
    end_date: endDate,
    subheading: subHeading,
    desc: description,


  };
  const submitData = (event) => {
    modalIndex===null?addData(newRecord):updateEntry(newRecord,modalIndex);
    setHeading(null);
    setEndDate(null);
    setSubheading(null);
    setStartDate(null);
    setDescription(null);
    handleModal();
    document.getElementById('flush').click();
    
  };
  return (
    <div className= {`detail-modal-blur ${modalOpen ? "" : "hide"}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="detail-modal"
      >
      
      <div className={mediaSelection === "educations" && isNew ? "subject-modal" : "tab-hide"  }>Add New Education</div>
      <div className={mediaSelection === "educations" && isEdit ? "subject-modal" : "tab-hide"  }>Edit Education</div>
        <div className={mediaSelection === "works"  && isNew ? "subject-modal" : "tab-hide"  }>Add New Work Experience</div>
        <div className={mediaSelection === "works" && isEdit ? "subject-modal" : "tab-hide"  }>Edit Work Experience</div>
        <div className={mediaSelection === "achievements"  && isNew ? "subject-modal" : "tab-hide"  }>Add New Achievement</div>
        <div className={mediaSelection === "achievements" && isEdit ? "subject-modal" : "tab-hide"  }>Edit Achievement</div>
        <div className="popup-col">
          {/* <div className="popup-col-head">Institute</div> */}
          <div className={mediaSelection === "educations" ? "popup-col-head" : "tab-hide"  }>Institute</div>
          <div className={mediaSelection === "works" ? "popup-col-head" : "tab-hide"  }>Company</div>
          <div className={mediaSelection === "achievements" ? "popup-col-head" : "tab-hide"  }>Title</div>
          <div className="popup-col-input">
        
            <input
              defaultValue={modalData.heading}
              type="text"
              onChange={(e) => {
                setHeading(e.target.value);
              }}
              className="input-box"
            />
          </div>
        </div>
        <div className="popup-col">
          {/* <div className="popup-col-head">Degree</div> */}
          <div className={mediaSelection === "educations" ? "popup-col-head" : "tab-hide"  }>Degree</div>
          <div className={mediaSelection === "works" ? "popup-col-head" : "tab-hide"  }>Role</div>
          <div className={mediaSelection === "achievements" ? "tab-hide" : "popup-col-input"  }>
            <input
              defaultValue={modalData.subheading}
              type="text"
              onChange={(e) => {
                setSubheading(e.target.value);
              }}
              className="input-box"
            />
          </div>
        </div>
        <div className="popup-row">
          {/* <div className="popup-col m-right"> */}
          <div className={mediaSelection === "achievements" ? "tab-hide" : "popup-col m-right"  }>
            <div className="popup-col-head">Start Date</div>
            <div className="popup-col-input">
              <input
                defaultValue={modalData.start_date}
                type="text"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                className="input-box"
              />
            </div>
          </div>
          <div className="popup-col">
          <div className={mediaSelection === "achievements" ? "tab-hide" : "popup-col-head"  }>End Date</div>
          <div className={mediaSelection === "achievements" ? "popup-col-head" : "tab-hide"  }>Date</div>
            <div className="popup-col-input">
              <input
                defaultValue={modalData.end_date}
                type="text"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                className="input-box"
              />
            </div>
          </div>
        </div>
        <div className="popup-col">
          <div className="popup-col-head">Description</div>
          <div className="popup-col-input">
            <textarea
              defaultValue={modalData.desc}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="text-area input-box wd-100"
            ></textarea>
          </div>
        </div>
        <div className="popup-row">
          <button
            type="Submit"
            className="btn-save m-right"
            onClick={(e) => {
              submitData(e);
            }}
          >
            Save
          </button>
          <button
            className="btn-save btn-edit"
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </button>
          <button type="reset" id="flush" hidden></button>
        </div>
      </form>
    </div>
  );
};

export default ModalExpand;

import React, { useState } from "react";
import SliderDetail from "./SliderDetail";
import ModalExpand from "./ModalExpand";
const Slider = ({ mediaSelection, data, setList, handleRender, addData,index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    heading: "",
    start_date: "",
    end_date: "",
    subheading: "",
    desc: "",
  });
  const [modalIndex, setModalIndex] = useState(null);
  const handleModal = (record, index) => {
    console.log(record)
    console.log(index)
    setModalOpen(!modalOpen);
    setModalData({
      heading: "",
      start_date: "",
      end_date: "",
      subheading: "",
      desc: "",
    });
    setModalIndex(null);
  };
  const editModal = (record, index) => {
    console.log(index)
    console.log(record)
    setModalOpen(!modalOpen);
    setModalIndex(index);
    setModalData(record);
  };

  const updateEntry = (newRecord, index) => {
    data[0][mediaSelection].splice(index, 1);
    data[0][mediaSelection].splice(index, 0, newRecord);
    handleRender();
    handleModal();
  };
  const deleteRecord = (index) => {
    data[0][mediaSelection].splice(index, 1);
    setList(data);
    handleRender();
  };
  return (
    <div className="tab-card">
      <button
        className="tab-add-btn"
        onClick={() => {
          handleModal(modalData, 0);
          setIsNew(true);
          setIsEdit(false);
        }}
      >
        Add New
      </button>
      {data[0][mediaSelection].map((record, key) => {
        return (
          <SliderDetail
            record={record}
            tabHeading={record.heading}
            tabSDate={record.start_date}
            tabEDate={record.end_date}
            tabSubHeadVal={record.subheading}
            tabDesc={record.desc}
            mediaSelection={mediaSelection}
            deleteRecord={deleteRecord}
            handleModal={editModal}
            modalOpen={modalOpen}
            updateEntry={updateEntry}
            key={key}
            index={key}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            isNew={isNew}
            setIsNew={setIsNew}
          />
        );
      })}

      <ModalExpand
        modalOpen={modalOpen}
        handleModal={handleModal}
        updateEntry={updateEntry}
        modalData={modalData}
        modalIndex={modalIndex}
        addData={addData}
        mediaSelection={mediaSelection}
        index={index}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        isNew={isNew}
          setIsNew={setIsNew}
      />
    </div>
  );
};

export default Slider;

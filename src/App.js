import React , {useState,useEffect} from "react";
import Nav from "./Components/Nav";
import DummyJSON from './DummyJSON/DummyJSON.json'
import Main from "./Components/Main";
import SliderSection from "./Components/SliderSection";

import './Styles/Main.css'
function App() {
  const [list,setList] = useState(DummyJSON);
  const [dummyUpdate,setDummyUpdate] = useState(false);
  const handleRender = () => {
    setDummyUpdate(!dummyUpdate);
  };
  useEffect(()=>{

  },[dummyUpdate])
  return (
    <>
      <Nav data={list} setList={setList}/>
      <Main data={list} setList={setList}/>
      <SliderSection data={list} setList={setList} handleRender={handleRender}/>
    </>
  );
}

export default App;

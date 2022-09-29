import React from 'react'

const SliderClick = ({mediaSelection,setMediaSelection,btnTitle,index,data}) => {
  return (
    <div className={`tab-button ${mediaSelection===index?"tab-button-selected":''}`} onClick={()=>{setMediaSelection(index)}}>
           <div className="tab-button-text">
               {`${btnTitle}(${data[0][index].length})`}
           </div>
       </div>
  )
}

export default SliderClick
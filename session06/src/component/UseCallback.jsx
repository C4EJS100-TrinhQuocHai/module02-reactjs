import React,{memo} from 'react'

 function UseCallback({callback}) {
    console.log("777777777",callback);
   const handleClick =()=>{
        callback();
   }
  return (
    <div>
        UseCallback
        <button onClick={handleClick}>click</button>
    </div>
  )
}
export default memo(UseCallback);

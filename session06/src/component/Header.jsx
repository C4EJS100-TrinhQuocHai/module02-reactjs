import React,{memo} from 'react'

 function Header({count1}) {
    // console.log("header bị render",count1);
    // const {count}=props;
    // const a= props.count;

  return (
    <div>Header</div>
  )
}
export default memo(Header)

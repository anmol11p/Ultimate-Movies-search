import React, { useState } from 'react'
import "./toggle.css"

import { IoIosSwitch } from "react-icons/io";
const Togglebutton = () => {
  const [isON,setisON]=useState(false);
  const toggleswitch=()=>{
setisON(!isON)
  }
  const checkIson=isON?"ON":"OFF";
  
return <>
 <IoIosSwitch className='text-3xl text-center'/>
<div className='toggle-container'onClick={toggleswitch} style={{background:isON?"red":"#4caf50"}}>
<div className={`toggleCircle ${checkIson}`}>
  <span>{checkIson} </span>
</div>
</div>
   </>
  
}

export default Togglebutton
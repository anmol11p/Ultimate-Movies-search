import React, { useState } from 'react'

const LiftingtheStateUp = () => {
    const [inputvalue,setInputvalue]=useState("")
  return (
    <>
    <div className="flex font-bold flex-col items-center gap-7 my-4">
  <Inputvalue  inputvalue={inputvalue}setInputvalue={setInputvalue}/>
  <DisplayValue inputvalue={inputvalue} />
  </div>
  </>
  )
}

export default LiftingtheStateUp;
// const[inputvalue,setInputvalue]=useState('')  this value is lifted to the parents to share the sibling 
export const Inputvalue=({inputvalue,setInputvalue})=>{
  console.log(inputvalue)
return(
    <>
    <div>
        <input className='bg-white border-none  text-black' type="text" placeholder='enter the value' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
    
    </div>
    </>
)
}

export const DisplayValue=(props)=>{
    console.log(props.inputvalue)
    return(
        <>
{props.inputvalue.length>0?<h1 className='font-bold'> you entered the value: {props.inputvalue}</h1>: <h1> no value entered till now</h1>}
</>)}
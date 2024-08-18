import React from 'react'

const EventProps = () => {
    const handleWelcomeuser=(user)=>{
alert(`welcome ${user}`)
    }
    const handlehover=()=>{
        console.log
        (`you click on hover event`)
            }
  return (
   <WelcomeUser onClick={()=>handleWelcomeuser("anmol")} onMouseEnter={handlehover}/>
  )
}

export default EventProps;

export const WelcomeUser=(props)=>{
  const  {onClick,onMouseEnter}=props;

    const greeting=()=>{
    alert("hey greeting to you...");

    }
    return(
   <>

    <div className='flex  my-10 '>

   <button className="bg-red-500 text-white  w-38 " onClick={onClick}>click me</button>
 
   <button className="bg-green-500 text-white  w-38 " onMouseEnter={onMouseEnter}>hover me</button>
 
   <button className="bg-red-500 text-white  w-38 " onClick={greeting}>Greeting</button>
   </div>
    </>

    )
}
import React from "react";

const Eventhandling = () => {
  /*  function handlebuttonclick(e){    Synthetic base event (1)
     console.log(e);
    alert("button has been clicked")
     } */

  /* const handlebuttonclick=(e)=>{      synthetic base event( 2)
        console.log(e);
       alert("button has been clicked")
       } */

//  const handlebuttonclick=(e)=>{    /* PointerEvent (3)  in handlebuttonclick(event) parameter event is necessary */
// console.log(e)
// alert("btn has been clicked ")
// console.log(e.target)
//  }  


const handleWelcomeuser=(user)=>{         /*taking parameter */
    console.log("welcome "+user)
}

  return (
    <>
         {/* <button className="bg-red-500 text-white border-l-black w-16 mt-32" onClick={handlebuttonclick}>click me</button>  (1)*/}


          {/* <button className="bg-red-500 text-white border-l-black w-16 mt-32" onClick={handlebuttonclick}>click me</button> (2) */}


           {/* <button className="bg-red-500 text-white  mt-32" onClick={(e) => handlebuttonclick(e)}>  click me 2 </button>  (3)*/}

         {/*<button className="bg-red-500 text-white border-l-black w-16 mt-32" onClick={(e)=>console.log(e)}>Inline onclick function</button>   it also give synthetic event (4) */ }

         {/* <button className="bg-red-500 text-white  mt-32" onClick={() => alert("this inline function")}>Inline Arrow Function </button> (5)*/}


         {/* <button className="bg-red-500 text-white  mt-32" onClick={handleWelcomeuser("anmol")}>Passing Arguments</button> it is called by default  */}


         <button className="bg-red-500 text-white  mt-32" onClick={()=>handleWelcomeuser("anmol")}>Passing Arguments</button> 


    </>
  );
};
export default Eventhandling;

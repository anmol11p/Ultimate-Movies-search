import React from 'react'
import img from "/Qot.png"
import Data from "../api/Seriesdata.json"
import Netflixcard from './Netflixcard'


 const NetflixSeries = () => {
 return (
 <>
 <div className="container" style={{marginTop:"20vh"}}>
  <div className="row">
     {Data.map((series,index)=>{
    return (<Netflixcard series={series} key={index}   ///props pass krna
   />)  //jsx pass krna

     })}

</div>
</div>
 </>
  )
}

export default NetflixSeries;

  export const Header=()=>{
  return(
    <>
<nav className="navbar navbar-expand-lg bg-dark fixed-top bg-body-tertiary" data-bs-theme="dark">
<div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export const Footer=()=>{
  return(
    <div className='container'> 
  <p style={{marginTop:"10vh"}}>
    no copyright @anmol panday
  </p> </div>)
}
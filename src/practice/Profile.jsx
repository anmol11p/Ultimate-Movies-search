import React from "react";
import App from "./../App";

const Profile = () => {
  return (
    <Profilecard
      name="anmol"
      age={20}
      greeting={
      
        <div>
       <strong>hii alice have a wonderful day</strong>                 {/*/* passing whole jsx */}
        </div>
      }
    >
      <p> how are you?</p>
    </Profilecard>
  );
};
export default Profile;

function Profilecard({name,age,greeting,children}) {
  return (
    <>
      <div className="container" style={{ display: "grid" }}>
        <span> name: {name} </span>
        age: {age}
        {greeting}
        <div>{children}</div>
      </div>
    </>
  );
}

// export default Profilecard;

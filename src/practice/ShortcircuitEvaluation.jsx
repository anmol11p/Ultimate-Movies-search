import React, { useState } from 'react';

const ShortcircuitEvaluation = () => {
  const [isLogin, setIslogin] = useState(true);
const [user,setUser]=useState('')
 const  handleClick=(value)=>{
setIslogin(value)
  }

  return (
    <section className='flex justify-center gap-5 flex-col items-center mt-4'>
      <h1>Welcome to the Shortcircuit Evaluation!</h1>
      <p> {isLogin&&"login"}  </p>
      <p> {user?`hello ${user}`:"you're logged in"}</p>
      <div className="grid gap-4">
        <button onClick={()=>handleClick(!isLogin)} className='bg-sky-600 rounded-xl p-4'>
            click
        </button>
        <button onClick={()=>setUser("Vinod Thapa")}>Set Users</button>
        <button onClick={()=>setUser("plz login")}>Clear Users</button>
      </div>
    </section>
  );
}

export default ShortcircuitEvaluation;

import React, { useState } from "react";
import "./Make_id.css";
import { FaCheckCircle } from "react-icons/fa";

const Make_ids = () => {
  const [Inputvalue, setInputvalue] = useState({id: '', content: '', checked: false});
//   const[checked,content,id]=Inputvalue;
  const handleOnchange = (value) => {
    setInputvalue({ id: value, content: value, checked: false });
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
  };

  const handlecheck=(check,value)=>{
    setInputvalue((prevValue) => ({
       id:prevValue.id,
       content:prevValue.content,
        checked: !check
      }));
      console.log(check);
      
    }
  return (
    <>
      <header>
        <form onSubmit={(e) => handleformSubmit(e)}>
          <input
            className="text-black"
            type="text"
            value={Inputvalue.content || ""}
            onChange={(e) => handleOnchange(e.target.value)}
          />
          <button className=" border-spacing-2 border rounded p-1 bg-green-400">
            {" "}
            submit
          </button>
         
        </form>

        <section>
          <br />
          <div className={Inputvalue.checked?"line-through":""}>
            {Inputvalue.content
              ? `${Inputvalue.content}`
              : "Please enter something." }
          </div>
          {Inputvalue.content && <button onClick={()=>handlecheck(Inputvalue.checked,Inputvalue.content)}><FaCheckCircle /> </button>}
        </section>
      </header>
    </>
  );
};

export default Make_ids;

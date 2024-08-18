import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todopractice = () => {
    const getlocalstorage=()=>{
        const rawData=localStorage.getItem("todotasks");
        if(!rawData){
            return []
        }
        else{
          return  JSON.parse(rawData)
        }
    }
  const [inputValue, setInputValue] = useState({id:"",content:"",checked:false});
  const [task, settask] = useState(()=>getlocalstorage());

  const handleOnchange = (value) => {
    setInputValue({id:value,content:value,checked:false});
  };
  const handleformSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setInputValue({id:"",content:"",checked:false});
      return;
    }
 const duplicate=task.some((currElem)=>{
    return currElem.content===inputValue.content
 })
 if(duplicate){
    setInputValue({...inputValue,content:""})
    return ;
 }
    settask([...task, inputValue]);
    setInputValue({id:"",content:"",checked:false})
  };

  localStorage.setItem("todotasks",JSON.stringify(task))

  const handledelete=(id)=>{    
const update=task.filter((currElem)=>{
    return id!==currElem.id &&currElem
    
})
settask(update)
  }

  const handleCheck=(taskid)=>{
const updateCheck=task.map((currElem)=>{
    return taskid===currElem.id?{...currElem,checked:!currElem.checked}:currElem;
})
settask(updateCheck)

  }
  return (
    <div className="mt-8">
    <form onSubmit={(e) => handleformSubmit(e)}>
      <input
        type="text"
        value={inputValue.content}
        className="text-red-400 pl-4"
        onChange={(e) => handleOnchange(e.target.value)}
      />
    </form>
<div className="taskdetails">
{task.map((currTask,index)=>{
    return     <ul className="flex justify-center mt-5"key={index}><li className="flex gap-2 bg-purple-500 pl-3 pr-2 rounded-xl"><span className={currTask.checked?"line-through":""}> {currTask.content} </span> 
    <button className="text-green-500" onClick={()=>handleCheck(currTask.id)}><FaCheckCircle/> </button>
    <button className="text-yellow-500" onClick={()=>handledelete(currTask.id)}><MdDeleteForever/></button>
    </li>  </ul>

})}
</div>
    </div>
  );
};

export default Todopractice;

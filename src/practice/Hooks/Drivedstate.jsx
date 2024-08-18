import React, { useEffect, useState } from 'react'

// const users = [
//   { name: "Alice", age: "18" },
//   { name: "Bob", age: "21" },
//   { name: "Charlie", age: "25" },
//   { name: "David", age: "30" },
//   { name: "Eve", age: "22" },
//   { name: "Frank", age: "28" }
// ];





const Drivedstate = () => {
const [list,setList]=useState(  /* method 1 by usestate hook*/
  [
   { name: "Alice", age: 18},
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 25},
  { name: "David", age: 30 },
  { name: "Eve", age: 22},
  { name: "Frank", age: 28}
]
)

// find the number of users
const countUser=list.length;
// find the average of age
// const TotalAge=list.reduce(function(p,n){
  // return p+n.age
// },0)

  // Calculating the average age of users in the `list` array using reduce
  // `p` is the accumulator that holds the sum of ages, `n` is the current user object
  // Starting with `0` as the initial value, divide by `countUser` to get the average age
  const avgCount = list.reduce(function(p, n) {
    return p + n.age; // Adds the age of the current user to the accumulator
  }, 0) / countUser;

// const [list,setlist]=useState([]);      method 2 by usestate method
// useEffect(()=>{
//   setlist(users);
// },[])

// useEffect(()=>{setList([...list, { name: "Grace", age: "24" }]);         /*for adding extra object */
// },[])


  return (
    <>
    {/* <div className='main-div grid  justify-center'>
    <h1 className=' font-bold text-3xl px-8 py-4'>User List</h1>
    <table className='bg-red-950 text-white w-52 rounded-xl'>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} >
            <td className='p-3'>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> */}

    {/* // by the help  of useState */}
  <div className='main-div grid  justify-center'>
      <h1 className=' font-bold text-3xl px-8 py-4'>User List</h1>
      <table className='bg-red-950 text-white w-52 rounded-xl'>
        <tbody>
          {list.map((user, index) => (
            <tr key={index} >
              <td className='p-3'>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='px-4'>no. of user= {countUser}</h5>
      avg age of people ={avgCount}
    </div>
    </>
  );
};

export default Drivedstate;
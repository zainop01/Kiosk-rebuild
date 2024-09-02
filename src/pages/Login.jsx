// import React, { useEffect, useState } from "react";

// const Login = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Simulate a heavy API call by fetching a large amount of data
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/photos/"
//         ); // A large dataset
//         const result = await response.json();
//         // Simulate a delay
//         setTimeout(() => {
//           setData(result);
//         }, 3000); // 3-second delay
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log('hey How are you')


//   return (
//     <div>
//       <h1>Home Page</h1>
//       <ul>
//         {data.map((item, ind) => {
//           return (
//             <div>
//               <li key={ind}>{item.title}</li>
//               <img src={item.url} alt="" />
//             </div>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Login;
import React from 'react'

const Login = () => {
  return (
    <div>
      Hey 
    </div>
  )
}

export default Login

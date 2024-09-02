import React, { useEffect, useState } from "react";

const Admin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a heavy API call by fetching a large amount of data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos/"
        ); // A large dataset
        const result = await response.json();
        // Simulate a delay
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 3000); // 3-second delay
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    console.log(data)

    fetchData();
  }, []);
  

  if (loading) {
    return <div>Loading Home Page Data...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {data.map((item, ind) => {
          return (
            <div>
              <li key={ind}>{item.title}</li>
              <img src={item.url} alt="" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Admin;

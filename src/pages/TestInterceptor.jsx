// src/components/InterceptorTest.js
import React, { useState } from 'react';
import axiosInstance from '../axios/axiosConfig';

const InterceptorTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      const response = await axiosInstance.get('/posts/1');
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Test Axios Interceptors</h1>
      <button onClick={makeRequest}>Make Request</button>
      {data && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default InterceptorTest;

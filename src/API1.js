import React from 'react'
import { useState } from 'react';

const FakeStore = () => {
    const [data1, setData1] = useState([]);
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData1(data);
    }
    return (
      <div>
        <button onClick={fetchData}>Get Products from Fake store API</button>
        <div>
          {data1.map((item,index) => (
            <span key={index}>{item.title}</span>
          ))}
        </div>
      </div>
    );
}

export default FakeStore
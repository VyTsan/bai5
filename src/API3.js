import React from 'react'
import { useState } from 'react';

const FakeStore = () => {
    const [data1, setData1] = useState([]);
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setData1(data);
    }
    return (
      <div>
        <button onClick={fetchData}>Get Photos from jsonplaceholder</button>
        <div>
          {data1.map((item,index) => (
            <img key={index} src={item.thumbnailUrl} alt={item.title}/>
          ))}
        </div>
      </div>
    );
}

export default FakeStore
// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Buy Me A Chai</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// src/components/PoemForm.jsx
import React, { useState } from 'react';

const PoemForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    blogTitle: '',
    blogContent: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: 'url(/images/silhouette-of-nature-landscape-mountains-forest-in-background-blue-and-green-illustration-free-vector.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Blog Tree Poetry</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-green-500">User Name</label>
            <input 
              type="text"
              name="userName"
              id="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="input-group mb-4">
            <label htmlFor="blogTitle" className="block text-sm font-medium text-green-500">Poem Title</label>
            <input 
              type="text"
              name="blogTitle"
              id="blogTitle"
              value={formData.blogTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>

          <div className="input-group mb-8">
            <label htmlFor="blogContent" className="block text-sm font-medium text-green-500">Content</label>
            <textarea 
              name="blogContent"
              id="blogContent"
              rows="8"
              value={formData.blogContent}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PoemForm;

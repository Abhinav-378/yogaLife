import React, { useState } from 'react';
import axios from 'axios';

const TestUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    batchType: '',
    price: '',
    schedule: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('batchType', formData.batchType);
      data.append('price', formData.price);
      data.append('schedule', formData.schedule);
      data.append('image', formData.image); // Append file

      // Send to your backend API
      const response = await axios.post('http://localhost:5000/api/classes', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
      alert('Class added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to upload class data');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md w-full max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Add Yoga Class</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Batch Type</label>
          <input
            type="text"
            name="batchType"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Schedule</label>
          <input
            type="text"
            name="schedule"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestUploadForm;

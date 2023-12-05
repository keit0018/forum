import React, { useState } from 'react';

const CreatePostComponent = ({ loggedInUser }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePostCreation = async (e) => {
    e.preventDefault();
    console.log('Creating post:', { title, description, username: loggedInUser.username });
    try {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loggedInUser.username,
          post: title, // Assuming 'title' represents the content of the post
        }),
      });

      if (response.ok) {
        // If successful, you might want to handle the response accordingly
        console.log('Post created successfully');
        // Perform any additional actions if required
      } else {
        console.error('Failed to create post');
        // Handle the failure to create post
      }
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle other errors (e.g., network issues)
    }
    // Logic to create a post
  };

  return (
    loggedInUser && (
      <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-4 my-4 shadow-md">
        <div className="flex items-center border-b border-gray-300 pb-2 mb-2">
          
          <span className="ml-2 text-gray-700 font-semibold">{loggedInUser.username}</span>
        </div>
        <form onSubmit={handlePostCreation} className="flex">
          <input
            type="text"
            placeholder="Write something..."
            value={title}
            onChange={handleTitleChange}
            className="flex-grow border border-gray-300 rounded-l-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-r-lg py-2 px-4 focus:outline-none"
          >
            Post
          </button>
        </form>
      </div>
    )
  );
};

export default CreatePostComponent;
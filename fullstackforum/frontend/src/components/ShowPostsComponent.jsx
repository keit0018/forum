import React, { useState, useEffect } from 'react'

const ShowPostsComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from your backend when the component mounts
        fetchPosts();
      }, []);

    const fetchPosts = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/posts'); // Replace with your endpoint
          if (response.ok) {
            const data = await response.json();
            setPosts(data); 
            
            console.log(data);

          } else {
            console.error('Failed to fetch posts');
          }
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white shadow-md rounded-md p-4 mb-4"
        >
          <h3 className="text-lg font-semibold mb-2">{post.username}</h3>
          <p className="text-gray-700">{post.post}</p>
          {/* Additional post details */}
        </div>
      ))}
    </div>
  )
}

export default ShowPostsComponent
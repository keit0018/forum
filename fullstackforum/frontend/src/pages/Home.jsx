import React from 'react'
import CreatePostComponent from '../components/CreatePostComponent';
import ShowPostsComponent from '../components/ShowPostsComponent';

const Home = () => {
  const loggedInUser = {
    username: 'exampleUser', 
  };

  return (
    <div>
      {/* Other content on the homepage */}

      {/* Render the CreatePostComponent */}
      <CreatePostComponent loggedInUser={loggedInUser} />
      <ShowPostsComponent/>
    </div>
  );
}

export default Home
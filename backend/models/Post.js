const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    post: {
        type: String,
        required: true,
      },
});

PostSchema.statics.getAllPosts = async function () {
    try {
      const posts = await this.find(); // Retrieve all posts
      return posts;
    } catch (error) {
      throw new Error('Error fetching posts:', error);
    }
  };
  
  // Method to create a new post
PostSchema.statics.createPost = async function (username, postContent) {
    try {
      const newPost = await this.create({ username, post: postContent });
      return newPost;
    } catch (error) {
      throw new Error('Error creating post:', error);
    }
  };



const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
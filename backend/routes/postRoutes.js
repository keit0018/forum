const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/posts', async (req, res) => {
    try {
      const allPosts = await Post.getAllPosts();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts' });
    }
  });
  
  // POST create a new post
router.post('/posts', async (req, res) => {
    const { username, post } = req.body;
    try {
      const newPost = await Post.createPost(username, post);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating post' });
    }
  });
  
module.exports = router;


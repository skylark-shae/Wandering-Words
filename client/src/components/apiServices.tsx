import { createPost, updatePost, deletePost } from '../api/apiSevices';

// Example: Create a new post
const handleCreatePost = async () => {
  try {
    const newPost = await createPost({ title: 'My Post', content: 'Hello, world!', author: 'John' });
    console.log('Post created:', newPost);
  } catch (error) {
    console.error(error);
  }
};

// Example: Update a post
const handleUpdatePost = async (postId: string) => {
  try {
    const updatedPost = await updatePost(postId, { title: 'Updated Title', content: 'Updated content' });
    console.log('Post updated:', updatedPost);
  } catch (error) {
    console.error(error);
  }
};

// Example: Delete a post
const handleDeletePost = async (postId: string) => {
  try {
    await deletePost(postId);
    console.log('Post deleted');
  } catch (error) {
    console.error(error);
  }
};

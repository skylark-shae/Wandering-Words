import { createPost, deletePost, updatePost } from "../service/PostService";

// Example: Create a new post
export const handleCreatePost = async () => {
  try {
    const newPost = await createPost({ title: 'My Post', content: 'Hello, world!', subheading: 'John' });
    console.log('Post created:', newPost);
  } catch (error) {
    console.error(error);
  }
};

// Example: Update a post
export const handleUpdatePost = async (postId: string) => {
  try {
    const updatedPost = await updatePost(postId, { title: 'Updated Title', content: 'Updated content' });
    console.log('Post updated:', updatedPost);
  } catch (error) {
    console.error(error);
  }
};

// Example: Delete a post
export const handleDeletePost = async (postId: string) => {
  try {
    await deletePost(postId);
    console.log('Post deleted');
  } catch (error) {
    console.error(error);
  }
};

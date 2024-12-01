import React, { useState } from 'react';
import { createPost } from '../api/apiSevices'; // Adjust the path to your service file
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation

const NewPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate(); // For redirecting after submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      await createPost({ title, content, author });
      navigate('/'); // Redirect to homepage or post list after successful creation
    } catch (err) {
      setError('Failed to create the post. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="new-post-container">
      <h2>Create a New Blog Post</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPostPage;

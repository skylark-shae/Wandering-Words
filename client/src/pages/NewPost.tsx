import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation
import './NewPage.css';
import { createPost } from '../service/PostService';
import { getActiveUser } from '../LocalStorage';
import Navbar from '../components/Navbar/Navbar';

const NewPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate(); // For redirecting after submission
  useEffect(() => {
    const activeUser = getActiveUser();

    if (!activeUser) {
      navigate("/Login")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      await createPost({ title, content, subheading });
      navigate('/'); // Redirect to homepage or post list after successful creation
    } catch (err) {
      setError('Failed to create the post. Please try again.');
      console.error(err);
    }
  };

  return (
    <>
    <Navbar />
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
          <label>Subheading:</label>
          <input
            type="text"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
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



        <button type="submit">Create Post</button>
      </form>
    </div>
    </>
  );
};

export default NewPostPage;

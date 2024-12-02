import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation
import { createAIPost, generateAiBlogPost } from '../../service/AIPostService';
import { getActiveUser } from '../../LocalStorage';

const NewAIPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [content, setContent] = useState('');
  const [prompt, setPrompt] = useState('');
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
      await createAIPost({ title, content, subheading });
      navigate('/'); // Redirect to homepage or post list after successful creation
    } catch (err) {
      setError('Failed to create the post. Please try again.');
      console.error(err);
    }
  };

  const handleAiPostGeneration = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await generateAiBlogPost(prompt);
    console.log('hi', prompt)
    setTitle(data.title)
    setSubheading(data.subheading)
    setContent(data.content)
    
  }

  return (
    <div className="new-post-container">
    
    <h2>Create a New Blog Post</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleAiPostGeneration}>
        <div className="form-group">
          <label>Prompt for ai blog post:</label>
          <input
            type="text"
            value={prompt}
            placeholder="Enter a prompt for your blog post"
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div> 
        <button type="submit">Generate</button>

    </form>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            disabled={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Subheading:</label>
          <input
            type="text"
            disabled={true}
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            disabled={true}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>



        <button type="submit">Save Post</button>
      </form>
    </div>
  );
};

export default NewAIPostPage;

const API_URL = 'https://ADD-OUR_URL.com/api'; // Replace with backend URL

// Generic function to handle API requests
async function apiRequest(endpoint: string, method: string, body?: any) {
  const headers = {
    'Content-Type': 'application/json',
    // Add Authorization header if needed:
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  };

  const options: RequestInit = {
    method, 
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(`${API_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}

// POST: Create a new blog post
export async function createPost(postData: { title: string; content: string; author: string }) {
  return apiRequest('/posts', 'POST', postData);
}

// UPDATE: Update an existing blog post
export async function updatePost(postId: string, updatedData: { title?: string; content?: string }) {
  return apiRequest(`/posts/${postId}`, 'PUT', updatedData);
}

// DELETE: Remove a blog post
export async function deletePost(postId: string) {
  return apiRequest(`/posts/${postId}`, 'DELETE');
}

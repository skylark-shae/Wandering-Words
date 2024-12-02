// import { AxiosResponse } from "axios";
import { getActiveUser } from "../LocalStorage";
import HttpService from "./HttpService";

// POST: Create a new blog post
export async function createAIPost(postData: { title: string; content: string; subheading: string }) {
    const user_id = getActiveUser().id;
    console.log(user_id)
    return HttpService.post('/ai_posts', {...postData, ...{ user_id}});
}

// UPDATE: Update an existing blog post
export async function updateAIPost(postId: string, updatedData: { title?: string; content?: string }) {
  return HttpService.put(`/ai_posts/${postId}`, updatedData);
}

// DELETE: Remove a blog post
export async function deleteAIPost(postId: string) {
  return HttpService.delete(`/ai_posts/${postId}`);
}

// get all posts 
export async function getAllAIPosts() {
    return HttpService.get(`/ai_posts`);
}

export async function getAiPostById(id: string) {
    return HttpService.get(`/ai_posts/${id}`)
}

export async function generateAiBlogPost(message: string) {
    return HttpService.post(`/chat`, {message})
}
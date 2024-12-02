// import { AxiosResponse } from "axios";
import { getActiveUser } from "../LocalStorage";
import HttpService from "./HttpService";

// POST: Create a new blog post
export async function createPost(postData: { title: string; content: string; subheading: string }) {
    const user_id = getActiveUser().id;
    return HttpService.post('/user_posts', {...postData, ...{ user_id}});
}

// UPDATE: Update an existing blog post
export async function updatePost(postId: string, updatedData: { title?: string; content?: string }) {
  return HttpService.put(`/user_posts/${postId}`, updatedData);
}

// DELETE: Remove a blog post
export async function deletePost(postId: string) {
  return HttpService.delete(`/user_posts/${postId}`);
}

// get all posts 
export async function getAllPosts() {
    return HttpService.get(`/user_posts`);
}

export async function getPostById(id: string) {
    return HttpService.get(`/user_posts/${id}`)
}
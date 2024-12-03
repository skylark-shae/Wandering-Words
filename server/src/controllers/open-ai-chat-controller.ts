import type { Request, Response } from "express";
import chatGptService from "../services/chatgpt.service.js";
import { systemPrompt } from "../utils/system-contant.js";

// post request to /api/chat
export const chat = async (req: Request, res: Response) => {
  const prompt = req.body.message;

  try {
    const completion = await chatGptService.chatGptCompletionRequest(
      prompt,
      systemPrompt
    );
    const convertedArticle = JSON.parse(completion?.message?.content);
    await res.json(convertedArticle);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

import OpenAI from 'openai';
class ChatGPTService {
    constructor() {
        this.openai = new OpenAI({
            organization: process.env['OPENAI_ORGANIZATION'] || '',
            project: process.env['OPENAI_PROJECTID'] || '',
            apiKey: process.env['API_KEY_CHATGPT'] || ''
        });
    }
    async chatGptCompletionRequest(prompt, systemPrompt, history = []) {
        const completion = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: systemPrompt },
                ...history,
                { role: 'user', content: prompt },
            ],
            temperature: 1.2,
        });
        return completion.choices[0];
    }
}
export default new ChatGPTService();

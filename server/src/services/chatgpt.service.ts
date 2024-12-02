import OpenAI from 'openai';

class ChatGPTService {
    private openai: OpenAI = new OpenAI({
        organization: process.env['OPENAI_ORGANIZATION'] || '',
        project: process.env['OPENAI_PROJECTID'] || '',
        apiKey: process.env['API_KEY_CHATGPT'] || ''
    });

    public async chatGptCompletionRequest(
        prompt: string,
        systemPrompt: string,
        history = [],
    ) {
        console.log(
            process.env['OPENAI_ORGANIZATION'],
            process.env['OPENAI_PROJECTID'],
            process.env['API_KEY_CHATGPT'] 
        );
        const completion: any = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: systemPrompt },
                ...history,
                { role: 'user', content: prompt as any },
            ],
            temperature: 1.2, 
        })

        return completion.choices[0];
    }

}

export default new ChatGPTService();
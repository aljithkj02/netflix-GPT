import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API_KEY,
  dangerouslyAllowBrowser: true
});

export const createPrompt = (query) => {
    return `Act as a movie recommendation system and suggest some movie for the query : ${query}.Only give me names of 5 movies, comma seperated like the example results given ahead. Example Results: KGF, Salaar, Hitch, Rocky, Pirates of carebian`
}

export const getRecommendedMovies = async (query) => {
    const prompt = createPrompt(query);
    try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          model: 'gpt-3.5-turbo',
        });
        return chatCompletion?.choices[0]?.message?.content?.split(', ');
    } catch (error) {
        console.log(error.message);
    }
}
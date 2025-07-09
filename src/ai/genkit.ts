import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: process.env.GOOGLE_API_KEY
    ? [
        googleAI({
          // An API key is required. You can create one in Google AI Studio:
          // https://aistudio.google.com/app/apikey
          // Then, add it to your .env file as GOOGLE_API_KEY.
          apiKey: process.env.GOOGLE_API_KEY,
        }),
      ]
    : [],
});

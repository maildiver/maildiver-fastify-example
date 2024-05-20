import { Maildiver } from 'maildiver';

const maildiverApiKey = process.env.MAILDIVER_API_KEY;

if (!maildiverApiKey) {
  throw new Error('MAILDIVER_API_KEY is not defined');
}

export const maildiver = new Maildiver({
  apiKey: maildiverApiKey,
});

import { createApi } from 'unsplash-js';

const unsplashAccessKey: string = process.env.UNSPLASH_ACCESS_KEY as string;

export const unsplash = createApi({
    accessKey: unsplashAccessKey
});

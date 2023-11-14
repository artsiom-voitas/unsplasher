import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const unsplashBaseUrl = 'https://api.unsplash.com/search/photos?';
export const unsplashKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

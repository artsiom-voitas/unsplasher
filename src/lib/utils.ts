import { unsplash } from '@/api';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getImages(collection: string) {
    const res = await unsplash.search.getCollections({ query: `${collection}` });
    console.log(res);
    if (!res) {
        throw new Error('Failed to fetch data');
    }

    return res;
}

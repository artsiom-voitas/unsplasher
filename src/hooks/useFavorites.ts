import { UnsplashRespond } from '@/components/FoundImages';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function useFavorites() {
    const initialFavorites: UnsplashRespond[] = [];
    const [favorites, setFavorites] = useLocalStorage('favorites', initialFavorites);

    useEffect(() => {}, [favorites]);

    return [favorites, setFavorites] as const;
}

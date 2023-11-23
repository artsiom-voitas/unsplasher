'use client';

import useFavorites from '@/hooks/useFavorites';
import { useEffect, useState } from 'react';
import ImagesCards from './ImagesCards';
import SkeletonImages from './SkeletonImages';

export default function FavoriteImages() {
    const [favorites] = useFavorites();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (favorites.length > 0) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    }, []);

    return (
        <>
            <h1 className="mb-8 mt-4 flex scroll-m-20 justify-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Your Favorite pictures
            </h1>
            {isLoading ? <SkeletonImages /> : <ImagesCards images={favorites} />}
        </>
    );
}

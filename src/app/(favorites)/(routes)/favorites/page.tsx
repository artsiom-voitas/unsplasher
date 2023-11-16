'use client';

import Header from '@/components/Header';
import ImageCard from '@/components/ImageCard';
import Loader from '@/components/ui/loader';
import useFavorites from '@/hooks/useFavorites';
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Favorites() {
    const [favorites] = useFavorites();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <main className='w-full" container h-full'>
            <Header isFilterBtnsShowed={false} />
            <h1 className="mt-4 flex scroll-m-20 justify-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Your Favorite pictures
            </h1>
            {isLoading ? (
                <Loader />
            ) : (
                <ResponsiveMasonry
                    className="my-8"
                    columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3 }}>
                    <Masonry
                        columnsCount={3}
                        gutter="20px">
                        {favorites.map((favorite) => (
                            <ImageCard
                                imgData={favorite}
                                key={favorite.id}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            )}
        </main>
    );
}

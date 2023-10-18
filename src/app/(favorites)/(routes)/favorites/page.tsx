'use client';

import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useReadLocalStorage } from 'usehooks-ts';

export default function Favorites() {
    const favorites = useReadLocalStorage<string[]>('favorites');
    const [pageFav, setPageFav] = useState<string[]>([]);
    const AnimatedCard = motion(Card);

    useEffect(() => {
        if (favorites) {
            setPageFav(favorites);
        }
    }, [favorites]);

    return (
        <main className='w-full" container h-full'>
            <Header isFilterBtnsShowed={false} />
            <h1 className="mt-4 flex scroll-m-20 justify-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                Your Favorite pictures
            </h1>
            <ResponsiveMasonry
                className="my-8"
                columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3 }}>
                <Masonry
                    columnsCount={3}
                    gutter="20px">
                    {pageFav.map((favorite, key) => (
                        <AnimatedCard
                            className="h-fit max-w-[410px] rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            key={key}>
                            <Image
                                key={key}
                                src={favorite}
                                width={410}
                                height={513}
                                className="rounded-xl"
                                alt="One of your favorite pictures"
                            />
                        </AnimatedCard>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </main>
    );
}

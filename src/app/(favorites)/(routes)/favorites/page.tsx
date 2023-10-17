'use client';

import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
            <div className="my-8 grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
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
                            alt="One of your favorite pictures"
                        />
                    </AnimatedCard>
                ))}
            </div>
        </main>
    );
}

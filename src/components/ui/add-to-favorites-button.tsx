'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Heart from 'react-animated-heart';
import { useLocalStorage } from 'usehooks-ts';
import { UnsplashRespond } from '../FoundImages';

interface AddToFavoritesButtonProps {
    imageData: UnsplashRespond;
}

export default function AddToFavoritesButton({ imageData }: AddToFavoritesButtonProps) {
    const initialFavorites: string[] = [];
    const [favorites, setFavorites] = useLocalStorage('favorites', initialFavorites);
    const imgLink: string = imageData?.urls.regular;

    const [isLiked, setIsLiked] = useState<boolean>(
        favorites.filter((link) => link === imgLink).length === 1
    );

    useEffect(() => {
        if (isLiked) {
            setFavorites((favorites) => [...favorites, imgLink]);
        } else {
            const unliked = favorites.filter((link) => link !== imgLink);
            setFavorites(unliked);
        }
    }, [isLiked]);

    function onClick(): void {
        setIsLiked(!isLiked);
    }

    return (
        <motion.div
            className="absolute right-1 top-1"
            whileTap={{ scale: 0.9 }}>
            <Heart
                isClick={isLiked}
                onClick={onClick}
            />
        </motion.div>
    );
}

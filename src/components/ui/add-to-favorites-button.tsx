'use client';

import useFavorites from '@/hooks/useFavorites';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Heart from 'react-animated-heart';
import { UnsplashRespond } from '../FoundImages';

interface AddToFavoritesButtonProps {
    imageData: UnsplashRespond;
}

export default function AddToFavoritesButton({ imageData }: AddToFavoritesButtonProps) {
    const [favorites, setFavorites] = useFavorites();
    const imgId: string = imageData?.id;
    const isImgInFavorites = favorites.filter((favorite) => favorite?.id === imgId).length > 0;
    const [isLiked, setIsLiked] = useState<boolean>(isImgInFavorites);

    useEffect(() => {}, [isLiked]);

    function onClick(): void {
        setIsLiked(!isLiked);
        if (!isLiked) {
            setFavorites((favorites: any) => [...favorites, imageData]);
        } else {
            const unliked = favorites.filter((favorite) => favorite?.id !== imgId);
            setFavorites(unliked);
        }
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

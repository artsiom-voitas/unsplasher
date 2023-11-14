import { motion } from 'framer-motion';
import Image from 'next/image';
import { UnsplashRespond } from './FoundImages';
import AddToFavoritesButton from './ui/add-to-favorites-button';
import { Card } from './ui/card';

interface ImageCardProps {
    img: string;
    imgData: UnsplashRespond;
}

const AnimatedCard = motion(Card);

export default function ImageCard({ img, imgData }: ImageCardProps) {
    return (
        <AnimatedCard
            className="relative h-fit max-w-[410px] rounded-xl"
            whileHover={{ scale: 1.05 }}>
            <Image
                className="rounded-xl"
                src={img}
                alt={'Unsplash Image'}
                width={410}
                height={513}
            />
            <AddToFavoritesButton imageData={imgData} />
        </AnimatedCard>
    );
}

import { motion } from 'framer-motion';
import Image from 'next/image';
import { UnsplashRespond } from './FoundImages';
import AddToFavoritesButton from './ui/add-to-favorites-button';
import { Card } from './ui/card';

interface ImageCardProps {
    imgData: UnsplashRespond;
}

const AnimatedCard = motion(Card);

export default function ImageCard({ imgData }: ImageCardProps) {
    return (
        <AnimatedCard
            className="relative h-fit max-w-[432px] rounded-xl"
            whileHover={{ scale: 1.03 }}>
            <Image
                className="rounded-xl"
                src={imgData?.urls?.regular}
                alt={imgData?.alt_description}
                width={500}
                height={500}
                unoptimized
                priority={true}
                placeholder="blur"
                blurDataURL={'blur'}
            />
            <AddToFavoritesButton imageData={imgData} />
        </AnimatedCard>
    );
}

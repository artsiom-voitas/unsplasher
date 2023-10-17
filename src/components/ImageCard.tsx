import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from './ui/card';

interface ImageCardProps {
    img: string;
}

export default function ImageCard({ img }: ImageCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}>
            <Card className="h-fit max-w-[410px] rounded-xl">
                <Image
                    className="rounded-xl"
                    src={img}
                    alt={'Unsplash Image'}
                    width={410}
                    height={513}
                />
            </Card>
        </motion.div>
    );
}

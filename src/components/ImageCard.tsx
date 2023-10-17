import Image from 'next/image';
import { Card } from './ui/card';

interface ImageCardProps {
    img: string;
}

export default function ImageCard({ img }: ImageCardProps) {
    return (
        <Card className="h-fit max-w-[410px] rounded-xl">
            <Image
                className="rounded-xl"
                src={img}
                alt={'Unsplash Image'}
                width={410}
                height={513}
            />
        </Card>
    );
}

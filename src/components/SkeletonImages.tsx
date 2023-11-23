import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Skeleton } from './ui/skeleton';

export default function SkeletonImages() {
    let Skeletons = [];
    for (let index = 0; index < 9; index++) {
        Skeletons.push(
            <Skeleton
                key={index}
                className="h-[612px] w-full rounded-xl"
            />
        );
    }

    return (
        <ResponsiveMasonry
            className="my-8 w-full"
            columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3 }}>
            <Masonry
                columnsCount={3}
                gutter="20px">
                {Skeletons}
            </Masonry>
        </ResponsiveMasonry>
    );
}

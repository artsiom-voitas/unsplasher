import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { UnsplashRespond } from './FoundImages';
import ImageCard from './ImageCard';
import PaginatedItems from './ui/pagination';

interface ImagesCardsProps {
    images: UnsplashRespond[];
    query?: string | null;
    orderBy?: string | null;
    page?: string | null;
    pagesAmount?: number | null;
}
export default function ImagesCards({
    images,
    query,
    orderBy,
    page,
    pagesAmount
}: ImagesCardsProps) {
    const pagination =
        query && orderBy && page && pagesAmount ? (
            <PaginatedItems
                pagesAmount={pagesAmount}
                currentCollection={query}
                currentOrder={orderBy}
                currentPage={Number(page)}
            />
        ) : (
            <></>
        );
    return (
        <>
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3 }}>
                <Masonry
                    columnsCount={3}
                    gutter="20px">
                    {images.map((img) => (
                        <ImageCard
                            key={img.id}
                            imgData={img}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {pagination}
        </>
    );
}

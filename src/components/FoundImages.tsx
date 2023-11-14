'use client';

import { unsplashBaseUrl, unsplashKey } from '@/lib/utils';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageCard from './ImageCard';
import PaginatedItems from './ui/pagination';
import Loader from './ui/loader';

export interface UnsplashRespond {
    id: string;
    urls: {
        regular: string;
    };
}

export default function FoundImages() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [images, setImages] = useState<UnsplashRespond[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);

    const searchParams = useSearchParams();
    const query = searchParams.get('collection');
    const page = searchParams.get('page');
    const orderBy = searchParams.get('order_by');

    useEffect(() => {
        if (query && page && orderBy) {
            setIsLoading(true);
            axios
                .get(
                    `${unsplashBaseUrl}page=${page}&query=${query}&per_page=15&client_id=${unsplashKey}&order_by=${orderBy}`
                )
                .then((res) => {
                    const pagesAmount = res.data['total_pages'];
                    const imgs = res.data.results;

                    setImages(imgs);
                    if (pagesAmount > 100) {
                        setTotalPages(100);
                    }

                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1500);
                });
        }
    }, [setImages, page, query, orderBy]);

    return (
        <section className="mt-8">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3 }}>
                        <Masonry
                            columnsCount={3}
                            gutter="20px">
                            {images.map((img) => (
                                <ImageCard
                                    img={img.urls.regular}
                                    key={img.id}
                                    imgData={img}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    {query && orderBy && page && (
                        <PaginatedItems
                            pagesAmount={totalPages}
                            currentCollection={query}
                            currentOrder={orderBy}
                            currentPage={Number(page)}
                        />
                    )}
                </>
            )}
        </section>
    );
}

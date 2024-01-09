'use client';

import { unsplashBaseUrl, unsplashKey } from '@/lib/utils';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImagesCards from './ImagesCards';
import SkeletonImages from './SkeletonImages';

export interface UnsplashRespond {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
        full: string;
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
                    `${unsplashBaseUrl}page=${page}&query=${query}&per_page=30&client_id=${unsplashKey}&order_by=${orderBy}`
                )
                .then((res) => {
                    const pagesAmount = res.data['total_pages'];
                    const imgs = res.data.results;

                    if (pagesAmount > 100) {
                        setTotalPages(100);
                    }
                    setImages(imgs);

                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1500);
                });
        }
    }, [setImages, page, query, orderBy]);

    return (
        <section className="mt-8">
            {isLoading ? (
                <SkeletonImages />
            ) : (
                <ImagesCards
                    images={images}
                    query={query}
                    orderBy={orderBy}
                    page={page}
                    pagesAmount={totalPages}
                />
            )}
        </section>
    );
}

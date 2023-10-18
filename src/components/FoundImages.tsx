'use client';

import { unsplashKey } from '@/api';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import ImageCard from './ImageCard';
import PaginatedItems from './Pagination';
import { unsplashBaseUrl } from '@/lib/utils';

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
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <PacmanLoader
                        color="#800080"
                        size={75}
                    />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {images.map((img) => (
                            <ImageCard
                                img={img.urls.regular}
                                key={img.id}
                                imgData={img}
                            />
                        ))}
                    </div>
                    {query && orderBy && page && (
                        <PaginatedItems
                            pagesAmount={totalPages}
                            currentCollection={query}
                            currentOrder={orderBy}
                            currentPage={page}
                        />
                    )}
                </>
            )}
        </section>
    );
}

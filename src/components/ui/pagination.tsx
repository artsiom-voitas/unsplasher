'use client';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    currentCollection: string;
    currentOrder: string;
    pagesAmount: number;
    currentPage: number;
}

export default function Pagination({
    pagesAmount,
    currentPage,
    currentCollection,
    currentOrder
}: PaginationProps) {
    const { push } = useRouter();
    const page: number = currentPage - 1;
    const totalPages: number = pagesAmount > 0 ? pagesAmount : 100;

    const handlePageClick = (event: any) => {
        const newPage = event.selected + 1;
        push(`/?collection=${currentCollection}&page=${newPage}&order_by=${currentOrder}`);
    };

    return (
        <ReactPaginate
            className="my-8 flex items-center justify-center gap-4"
            breakLabel={<MoreHorizontal />}
            nextLabel={<ChevronRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel={<ChevronLeft />}
            forcePage={page}
            renderOnZeroPageCount={null}
            pageClassName={
                'w-8 h-8 flex items-center justify-center hover:opacity-[70%] bg-black dark:bg-white text-white dark:text-black rounded-xl cursor-pointer'
            }
            activeClassName={'opacity-[50%] hover:cursor-default hover:opacity-[50%]'}
            activeLinkClassName={'hover:cursor-default'}
            disabledClassName={'opacity-[50%] hover:cursor-default'}
            disabledLinkClassName={'hover:cursor-default'}
        />
    );
}

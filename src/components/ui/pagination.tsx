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

    const handlePageClick = (event: any) => {
        const newPage = event.selected + 1;
        push(`/?collection=${currentCollection}&page=${newPage}&order_by=${currentOrder}`);
    };

    return (
        <ReactPaginate
            className="my-8 flex items-center justify-center gap-1 sm:gap-4"
            breakLabel={<MoreHorizontal size={18} />}
            nextLabel={<ChevronRight size={18} />}
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            pageCount={pagesAmount}
            previousLabel={<ChevronLeft size={18} />}
            forcePage={page}
            renderOnZeroPageCount={null}
            pageClassName={
                'w-6 h-6 sm:w-8 sm:h-8 p-4 flex items-center justify-center hover:opacity-[70%] bg-black dark:bg-white text-white dark:text-black rounded-xl cursor-pointer'
            }
            activeClassName={'opacity-[50%] hover:cursor-default hover:opacity-[50%]'}
            activeLinkClassName={'hover:cursor-default'}
            disabledClassName={'opacity-[50%] hover:cursor-default'}
            disabledLinkClassName={'hover:cursor-default'}
        />
    );
}

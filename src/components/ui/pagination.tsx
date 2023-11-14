'use client';

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
            className="my-5 flex items-center justify-center gap-2"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            forcePage={page}
            renderOnZeroPageCount={null}
            pageClassName={'w-7 h-7 flex items-center justify-center hover:opacity-[70%] '}
            activeClassName={'opacity-[50%] hover:cursor-default hover:opacity-[50%]'}
            activeLinkClassName={'hover:cursor-default'}
            disabledClassName={'opacity-[50%] hover:cursor-default'}
            disabledLinkClassName={'hover:cursor-default'}
        />
    );
}

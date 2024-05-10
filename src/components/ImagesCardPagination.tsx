import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';

interface ImagesCardPaginationProps {
    currentCollection: string;
    currentOrder: string;
    pagesAmount: number;
    currentPage: number;
}

export function ImagesCardPagination({
    pagesAmount,
    currentPage,
    currentCollection,
    currentOrder
}: ImagesCardPaginationProps) {
    const pageNumbers = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pageNumbers.push(i);
    }
    const previousPage: number = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage: number = currentPage < pagesAmount ? currentPage + 1 : pagesAmount;

    const maxPageNum = 3;
    const pageNumLimit = Math.floor(maxPageNum / 2);

    let activePages = pageNumbers.slice(
        Math.max(0, currentPage - 1 - pageNumLimit),
        Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );

    const renderPages = () => {
        const renderedPages = activePages.map((page, idx) => (
            <PaginationItem key={idx}>
                <PaginationLink
                    isActive={currentPage === page}
                    href={`/?collection=${currentCollection}&page=${page}&order_by=${currentOrder}`}>
                    {page}
                </PaginationLink>
            </PaginationItem>
        ));

        if (activePages[0] > 1) {
            if (activePages[0] !== 2) {
                renderedPages.unshift(<PaginationEllipsis key="ellipsis-start" />);
            }
            renderedPages.unshift(
                <PaginationLink
                    key="first"
                    href={`/?collection=${currentCollection}&page=${1}&order_by=${currentOrder}`}>
                    {1}
                </PaginationLink>
            );
        }

        if (activePages[activePages.length - 1] < pageNumbers.length) {
            if (activePages[activePages.length - 1] !== pageNumbers.length - 1)
                renderedPages.push(<PaginationEllipsis key="ellipsis-end" />);
            renderedPages.push(
                <PaginationLink
                    key="last"
                    href={`/?collection=${currentCollection}&page=${pagesAmount}&order_by=${currentOrder}`}>
                    {pagesAmount}
                </PaginationLink>
            );
        }

        return renderedPages;
    };

    return (
        <Pagination className="my-8">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={`/?collection=${currentCollection}&page=${previousPage}&order_by=${currentOrder}`}
                    />
                </PaginationItem>

                {renderPages()}

                <PaginationItem>
                    <PaginationNext
                        href={`/?collection=${currentCollection}&page=${nextPage}&order_by=${currentOrder}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

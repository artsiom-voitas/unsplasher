'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const collections: string[] = [
    'nature',
    'city',
    'portrait',
    'food',
    'book',
    'retro',
    'flower',
    'toy',
    'color'
];

const order: string[] = ['relevant', 'latest'];

export default function FilterButtons() {
    const searchParams = useSearchParams();
    const query = searchParams.get('collection');
    const page = searchParams.get('page');
    const orderBy = searchParams.get('order_by');

    const [collection, setCollection] = useState<string>('');
    const [orderValue, setOrderValue] = useState<string>('');

    useEffect(() => {
        if (query && query?.length > 0 && page && page?.length > 0 && orderBy) {
            setCollection(query);
            setOrderValue(orderBy);
        } else {
            setCollection('nature');
            setOrderValue('relevant');
            redirect('/?collection=nature&page=1&order_by=relevant');
        }
    }, [query, page, orderBy]);

    return (
        <div className="flex justify-between gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="capitalize">
                        {collection}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                        value={collection}
                        onValueChange={setCollection}>
                        {collections.map((filter, key) => (
                            <Link
                                key={key}
                                href={`/?collection=${filter}&page=1&order_by=relevant`}>
                                <DropdownMenuRadioItem
                                    value={filter}
                                    className="capitalize">
                                    {filter}
                                </DropdownMenuRadioItem>
                            </Link>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="capitalize">
                        {orderValue}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup
                        value={orderValue}
                        onValueChange={setOrderValue}>
                        {order.map((filter, key) => (
                            <Link
                                key={key}
                                href={`/?collection=${query}&page=1&order_by=${filter}`}>
                                <DropdownMenuRadioItem
                                    value={filter}
                                    className="capitalize">
                                    {filter}
                                </DropdownMenuRadioItem>
                            </Link>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

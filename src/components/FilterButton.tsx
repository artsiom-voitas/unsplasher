'use client';

import * as React from 'react';

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
import { useEffect } from 'react';

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

export default function FilterButton() {
    const searchParams = useSearchParams();
    const query = searchParams.get('collection');

    const [collection, setCollection] = React.useState('');

    useEffect(() => {
        if (!query || query?.length === 0) {
            setCollection('nature');
            redirect('/?collection=nature');
        } else {
            setCollection(query);
        }
    }, [query]);

    return (
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
                            href={`/?collection=${filter}`}>
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
    );
}

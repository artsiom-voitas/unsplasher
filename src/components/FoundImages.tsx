'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function FoundImages() {
    const searchParams = useSearchParams();
    const query = searchParams.get('collection');

    return <div>FoundImages</div>;
}

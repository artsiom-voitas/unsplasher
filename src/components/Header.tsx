import { UserButton } from '@clerk/nextjs';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import FilterButtons from './FilterButtons';
import { Button } from './ui/button';
import { ToggleTheme } from './ui/toggle-theme';

interface HeaderProps {
    isFilterBtnsShowed: boolean;
}

export default function Header({ isFilterBtnsShowed }: HeaderProps) {
    return (
        <header className="my-6 flex items-center justify-between">
            <Link
                href={'/'}
                className="scroll-m-20 text-center text-2xl font-semibold tracking-tight transition-colors hover:opacity-90 sm:text-3xl">
                Unsplasher
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
                <>{isFilterBtnsShowed && <FilterButtons />}</>
                <Button
                    variant="outline"
                    size="icon">
                    <Link href={'/favorites'}>
                        <Heart />
                    </Link>
                </Button>
                <ToggleTheme />
                <Button
                    variant="outline"
                    size="icon">
                    <UserButton afterSignOutUrl="/" />
                </Button>
            </div>
        </header>
    );
}

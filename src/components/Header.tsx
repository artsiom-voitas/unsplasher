import { UserButton } from '@clerk/nextjs';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import FilterButtons from './FilterButtons';
import { ToggleTheme } from './toggle-theme';
import { Button } from './ui/button';

interface HeaderProps {
    isFilterBtnsShowed: boolean;
}

export default function Header({ isFilterBtnsShowed }: HeaderProps) {
    return (
        <header className="my-4 flex items-center justify-between">
            <>{isFilterBtnsShowed && <FilterButtons />}</>
            <Link
                href={'/'}
                className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors sm:text-3xl">
                Slmax
            </Link>
            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    size="icon">
                    <Link href={'/favorites'}>
                        <Heart />
                    </Link>
                </Button>
                <div className="flex flex-col-reverse items-center gap-1 sm:flex-row sm:gap-3">
                    <ToggleTheme />
                    <Button
                        variant="outline"
                        size="icon">
                        <UserButton afterSignOutUrl="/" />
                    </Button>
                </div>
            </div>
        </header>
    );
}

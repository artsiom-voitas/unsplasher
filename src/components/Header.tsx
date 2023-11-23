import { UserButton } from '@clerk/nextjs';

import { Heart } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import FiltersDropdownMenu from './FiltersDropdownMenu';
import { Button } from './ui/button';
import { ToggleTheme } from './ui/toggle-theme';

interface HeaderProps {
    isFilterDropdownDisplayed: boolean;
}

const Header = memo(function Header({ isFilterDropdownDisplayed }: HeaderProps) {
    return (
        <header className="my-6 flex items-center justify-between">
            <Link
                href={'/'}
                className="scroll-m-20 text-center text-2xl font-semibold tracking-tight transition-colors hover:opacity-90 sm:text-3xl">
                Unsplasher
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
                <>{isFilterDropdownDisplayed && <FiltersDropdownMenu />}</>
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
});

export default Header;

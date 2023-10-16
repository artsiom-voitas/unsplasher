import { UserButton } from '@clerk/nextjs';
import FilterButton from './FilterButton';
import { ToggleTheme } from './toggle-theme';
import { Button } from './ui/button';

export default function Header() {
    return (
        <header className="flex justify-between">
            <FilterButton />
            <div className="flex items-center gap-3">
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

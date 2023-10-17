import { UserButton } from '@clerk/nextjs';

import FilterButtons from './FilterButtons';
import { ToggleTheme } from './toggle-theme';
import { Button } from './ui/button';

export default function Header() {
    return (
        <header className="my-4 flex justify-between">
            <FilterButtons />
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

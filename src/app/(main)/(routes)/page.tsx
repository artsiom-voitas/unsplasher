import { ToggleTheme } from '@/components/toggle-theme';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
    return (
        <main className="flex justify-between">
            <UserButton afterSignOutUrl="/" />
            <ToggleTheme />
        </main>
    );
}

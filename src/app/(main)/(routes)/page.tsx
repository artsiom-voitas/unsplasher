import Header from '@/components/Header';
import { getImages } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

export default async function Home() {
    const data = await getImages('nature');

    return (
        <main>
            <Header />
        </main>
    );
}

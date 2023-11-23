import FoundImages from '@/components/FoundImages';
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className="container h-full w-full px-2 sm:px-8">
            <Header isFilterBtnsShowed={true} />
            <FoundImages />
        </main>
    );
}

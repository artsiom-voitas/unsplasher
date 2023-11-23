import FavoriteImages from '@/components/FavoriteImages';
import Header from '@/components/Header';

export default function Favorites() {
    return (
        <main className="container mb-8 h-full w-full px-2 sm:px-8">
            <Header isFilterDropdownDisplayed={false} />
            <FavoriteImages />
        </main>
    );
}

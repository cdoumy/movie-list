import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteProvider';
import TitlePage from '../TitlePage/TitlePage';
import Navigation from '../Navigation/Navigation';
import MoviesList from '../MoviesList/MoviesList';

export default function Favorites() {
    const { favoriteMovies } = useContext(FavoriteContext);

    return (
        <div className="main container">
            <TitlePage>Mes coups de coeur</TitlePage>
            <div className="cols-wrapper">
                <div className="aside">
                    <Navigation />
                </div>
                <div className="content-primary">
                    {favoriteMovies.length > 0 ? (
                        <MoviesList selectedIds={favoriteMovies} />
                    ) : (
                        <p className="no-results">Votre liste de coups de coeur est vide... pour l'instant&nbsp;!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

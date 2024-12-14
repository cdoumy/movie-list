import { useContext } from 'react';
import { AlreadySeenContext } from '../../context/AlreadySeenProvider';
import TitlePage from '../TitlePage/TitlePage';
import Navigation from '../Navigation/Navigation';
import MoviesList from '../MoviesList/MoviesList';

export default function AlreadySeen() {
    const { alreadySeenMovies } = useContext(AlreadySeenContext);

    return (
        <div className="main container">
            <TitlePage>Films déjà vus</TitlePage>
            <div className="cols-wrapper">
                <div className="aside">
                    <Navigation />
                </div>
                <div className="content-primary">
                    {alreadySeenMovies.length > 0 ? (
                        <MoviesList selectedIds={alreadySeenMovies} />
                    ) : (
                        <p className="no-results">Votre liste de films déjà vu est vide... pour l'instant&nbsp;!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

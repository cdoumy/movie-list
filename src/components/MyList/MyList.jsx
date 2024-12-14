import { useContext } from 'react';
import { MyListContext } from '../../context/MyListProvider';
import TitlePage from '../TitlePage/TitlePage';
import Navigation from '../Navigation/Navigation';
import MoviesList from '../MoviesList/MoviesList';

export default function MyList() {
    const { myListMovies } = useContext(MyListContext);

    return (
        <div className="main container">
            <TitlePage>Mes films à découvrir</TitlePage>
            <div className="cols-wrapper">
                <div className="aside">
                    <Navigation />
                </div>
                <div className="content-primary">
                    {myListMovies.length > 0 ? (
                        <MoviesList selectedIds={myListMovies} />
                    ) : (
                        <p className="no-results">Votre liste de films à découvrir est vide... pour l'instant&nbsp;!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

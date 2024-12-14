import TitlePage from '../TitlePage/TitlePage';
import Navigation from '../Navigation/Navigation';
import MoviesList from '../MoviesList/MoviesList';

export default function Dashboard() {
    return (
        <div className="main container">
            <TitlePage>Accueil</TitlePage>
            <div className="cols-wrapper">
                <div className="aside">
                    <Navigation />
                </div>
                <div className="content-primary">
                    <MoviesList />
                </div>
            </div>
        </div>
    )
}

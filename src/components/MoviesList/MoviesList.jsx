import { useState, useContext } from 'react';
import { MyListContext } from '../../context/MyListProvider';
import { AlreadySeenContext } from '../../context/AlreadySeenProvider';
import { FavoriteContext } from '../../context/FavoriteProvider';
import SortForm from '../SortForm/SortForm';
import moviesData from '../../data/moviesData';
import starEmpty from '../../assets/icons/star-empty.svg';
import starFull from '../../assets/icons/star-full.svg';
import heartEmpty from '../../assets/icons/heart-empty.svg';
import heartFull from '../../assets/icons/heart-full.svg';
import './MoviesList.scss';

export default function MoviesList({ selectedIds = [] }) {
    const { alreadySeenMovies, deleteToAlreadySeen, addToAlreadySeen } = useContext(AlreadySeenContext);
    const { myListMovies, deleteToMyList, addToMyList } = useContext(MyListContext);
    const { favoriteMovies, deleteToFavorite, addToFavorite } = useContext(FavoriteContext);
    let filteredMovies = selectedIds.length > 0
        ? moviesData.filter(movie => selectedIds.includes(movie.id))
        : moviesData;

    // Système de trie
    const [sortValue, setsortValue] = useState('alphabetical');
    if (sortValue === 'alphabetical') {
        filteredMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'date') {
        filteredMovies = filteredMovies.sort((a, b) => (b.year - a.year));
    } else if (sortValue === 'rating') {
        filteredMovies = filteredMovies.sort((a, b) => (b.rating - a.rating));
    }

    function handleChangeSortForm(value) {
        setsortValue(value);
    }

    function starsRating(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.round(rating)) {
                stars.push(starFull);
            } else {
                stars.push(starEmpty);
            }
        }
        return stars;
    }

    return (
        <>
            <SortForm onChange={handleChangeSortForm} />
            <ul className="list-movies">
                {filteredMovies.map(movie => (
                    <li key={movie.id} className="item">

                        <div className="buttons-wrapper">
                            {alreadySeenMovies.includes(movie.id) ? (
                                <button onClick={() => deleteToAlreadySeen(movie.id)}
                                    type="button" className="btn btn-already-seen" title="Retirer des films vus">
                                    <span className="icon active" aria-hidden="true"></span>
                                </button>
                            ) : (
                                <button onClick={() => addToAlreadySeen(movie.id)}
                                    type="button" className="btn btn-already-seen" title="Ajouter aux films vus">
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                            )}
                            {myListMovies.includes(movie.id) ? (
                                <button onClick={() => deleteToMyList(movie.id)}
                                    type="button" className="btn btn-list-to-see" title="Retirer des films à découvrir">
                                    <span className="icon active" aria-hidden="true"></span>
                                </button>
                            ) : (
                                <button onClick={() => addToMyList(movie.id)}
                                    type="button" className="btn btn-list-to-see" title="Ajouter aux films à découvrir">
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                            )}
                            {favoriteMovies.includes(movie.id) ?
                                (<button onClick={() => deleteToFavorite(movie.id)}
                                    type="button" className="btn btn-favorite" title="Retirer des coups de coeur">
                                    <img src={heartFull} className="icon" alt="" />
                                </button>)
                                :
                                (<button onClick={() => addToFavorite(movie.id)}
                                    type="button" className="btn btn-favorite" title="Ajouter aux coups de coeur">
                                    <img src={heartEmpty} className="icon" alt="" />
                                </button>)
                            }
                        </div>

                        <img src={movie.poster_url} className="media" alt="" title={movie.title} />

                        <div className="desc">
                            <p className="title">{movie.title}</p>
                            <div className="infos">
                                <p className="date">Sortie : {movie.year}</p>
                                <div className="rating">
                                    {starsRating(movie.rating).map((star, index) => (
                                        <img key={index} src={star} className="icon" />
                                    ))}
                                    <span className="result">
                                        ({movie.rating})
                                    </span>
                                </div>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </>
    )
}

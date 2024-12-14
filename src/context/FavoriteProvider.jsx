import { useState, createContext } from 'react';

export const FavoriteContext = createContext();

export default function FavoriteProvider(props) {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    function deleteToFavorite(currentId) {
        setFavoriteMovies(favoriteMovies.filter(id => id !== currentId));
    }

    function addToFavorite(currentId) {
        setFavoriteMovies([...favoriteMovies, currentId]);
    }

    return (
        <FavoriteContext.Provider value={{ favoriteMovies, deleteToFavorite, addToFavorite }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
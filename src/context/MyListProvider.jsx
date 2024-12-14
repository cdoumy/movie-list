import { useState, createContext } from 'react';

export const MyListContext = createContext();

export default function MyListProvider(props) {
    const [myListMovies, setMyListMovies] = useState([]);

    function deleteToMyList(currentId) {
        setMyListMovies(myListMovies.filter(id => id !== currentId));
    }

    function addToMyList(currentId) {
        setMyListMovies([...myListMovies, currentId]);
    }

    return (
        <MyListContext.Provider value={{ myListMovies, deleteToMyList, addToMyList }}>
            {props.children}
        </MyListContext.Provider>
    )
}
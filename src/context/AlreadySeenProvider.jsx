import { useState, createContext, useContext } from 'react';
import { MyListContext } from './MyListProvider';

export const AlreadySeenContext = createContext();

export default function AlreadySeenProvider(props) {
    const [alreadySeenMovies, setAlreadySeenMovies] = useState([]);
    const { deleteToMyList } = useContext(MyListContext);

    function deleteToAlreadySeen(currentId) {
        setAlreadySeenMovies(alreadySeenMovies.filter(id => id !== currentId));
    }

    function addToAlreadySeen(currentId) {
        setAlreadySeenMovies([...alreadySeenMovies, currentId]);
        deleteToMyList(currentId);
    }

    return (
        <AlreadySeenContext.Provider value={{ alreadySeenMovies, deleteToAlreadySeen, addToAlreadySeen }}>
            {props.children}
        </AlreadySeenContext.Provider>
    )
}
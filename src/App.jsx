import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Favorites from './components/Favorites/Favorites';
import MyList from './components/MyList/MyList';
import AlreadySeen from './components/AlreadySeen/AlreadySeen';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/mes-coups-de-coeur" element={<Favorites />} />
                <Route path="/films-a-decouvrir" element={<MyList />} />
                <Route path="/films-deja-vu" element={<AlreadySeen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

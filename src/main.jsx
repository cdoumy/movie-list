import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import FavoriteProvider from './context/FavoriteProvider.jsx';
import MyListProvider from './context/MyListProvider.jsx';
import AlreadySeenProvider from './context/AlreadySeenProvider.jsx';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoriteProvider>
        <MyListProvider>
            <AlreadySeenProvider>
                <App />
            </AlreadySeenProvider>
        </MyListProvider>
    </FavoriteProvider>
)

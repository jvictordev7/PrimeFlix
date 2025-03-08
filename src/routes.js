import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Error from './pages/Erro';
import Favorito from './pages/Favoritos';

import Header from './components/Header';

function RoutesApp() {
    return (
        <HashRouter> {/* Alterado para HashRouter */ }
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favorito />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
}

export default RoutesApp;

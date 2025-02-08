import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import PageNotFound from './pages/PageNotFound';
import CollectionsPage from './pages/CollectionsPage';
import StatsPage from './pages/StatsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/collections' element={<CollectionsPage />} />
                <Route path='/stats' element={<StatsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/*' exact element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
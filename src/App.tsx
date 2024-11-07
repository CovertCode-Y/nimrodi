import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Reception from './pages/Reception/Reception';
import Floor from './pages/Floor/Floor';
import Layout from './components/Layout/Layout';
import Forbidden from './pages/Forbidden/Forbidden';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="/reception" replace />} />
                    <Route path="/reception" element={<Reception />} />
                    <Route path="/floor/:index" element={<Floor />} />
                    <Route path="/forbidden" element={<Forbidden />} />
                    <Route path="*" element={<Navigate to="/reception" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;

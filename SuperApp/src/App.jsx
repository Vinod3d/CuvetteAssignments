import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import GenresPage from './pages/GenresPage.jsx';
import CarouselPage from './pages/CarouselPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/home" element={<RegisterPage />} />
        <Route path="/genres" element={<GenresPage/>} />
        <Route path="/carousel" element={<CarouselPage/>} />
        <Route path="/dashboard" element={<RegisterPage />} />
        <Route path="/movie" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import './App.css';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-full bg-[#242629] min-h-[100vh] pt-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

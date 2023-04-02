import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add additional routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

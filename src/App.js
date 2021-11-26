import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

// Styles
import './App.scss';

// Pages
import Campground from './pages/Campground/Campground';
import CreateCamp from './pages/CreateCamp/CreateCamp';
import Home from './pages/Home/LandingPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ViewCamp from './pages/ViewCamp/ViewCamp';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Link to="/">home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campground" element={<Campground />} />
          <Route path="/campground/:id" element={<ViewCamp />} />
          <Route path="/create" element={<CreateCamp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

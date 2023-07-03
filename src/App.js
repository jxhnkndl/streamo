import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import TrendingTV from './pages/TrendingTV';
import TrendingMovies from './pages/TrendingMovies';
import MovieDetails from './pages/MovieDetails';
import Footer from './layout/Footer';
import { MovieProvider } from './context/movie/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <main className="container max-w-7xl px-4 md:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending-tv" element={<TrendingTV />} />
              <Route path="/trending-movies" element={<TrendingMovies />} />
              <Route path="/movie-details" element={<MovieDetails />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;

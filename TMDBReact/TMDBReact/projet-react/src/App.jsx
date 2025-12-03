import { useEffect, useState } from 'react'
import { Film, Search } from 'lucide-react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import tmdbApi from './services/tmdbApi'
import './App.css'

function App() {

   // ========== ÉTAT ==========
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState(null);

    // ========== EFFETS ==========
    
    // Effet 1 : Charger les films populaires au montage
    useEffect(() => {
      loadPopularMovies();
    }, []);

    // Effet 2 : Rechercher avec debounce
    useEffect(() => {
      const timer = setTimeout(() => {
        if (searchTerm.trim()) {
          loadSearchResults(searchTerm);
        } else {
          loadPopularMovies();
        }
      }, 500);

      return () => clearTimeout(timer);
    }, [searchTerm]);

    // ========== HANDLERS (fonctions de gestion) ==========
    
    const loadPopularMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await tmdbApi.fetchPopularMovies();
        setMovies(results);
      } catch (err) {
        setError('Erreur lors du chargement. Vérifiez votre clé API !');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const loadSearchResults = async (query) => {
      setLoading(true);
      setError(null);
      try {
        const results = await tmdbApi.searchMovies(query);
        setMovies(results);
      } catch (err) {
        setError('Erreur lors de la recherche.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // ========== RENDU ==========
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film size={40} className="text-blue-500" />
            <h1 className="text-4xl font-bold text-white">
              MovieDB React
            </h1>
          </div>
          <p className="text-gray-400">
            Découvrez les meilleurs films
          </p>
        </header>

        {/* Barre de recherche */}
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />

        {/* Message d'erreur */}
        {error && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg text-red-200 text-center">
            {error}
          </div>
        )}

        {/* Liste de films */}
        <MovieList 
          movies={movies}
          loading={loading}
          onMovieClick={setSelectedMovie}
        />

        {/* Modal des détails */}
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      </div>
    );

  
}

export default App

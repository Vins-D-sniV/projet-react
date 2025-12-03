import { Film } from 'lucide-react';
import MovieCard from './MovieCard';
// RESPONSABILITÉ : Afficher une LISTE de films
// POURQUOI ce composant ?
// - Abstraction : gère la grille et le mapping
// - Réutilisable : peut afficher n'importe quelle liste
// - Messages d'état centralisés (loading, empty)

const MovieList = ({movies, loading, onMovieClick}) => {

    // chargement en cours
    if(loading){
        return(
            <div className="text-center text-white text-xl py-12">
                  <div className="animate-pulse">Chargement...</div>
            </div>
        );
    }

    // Aucun film 
    if(!movies || movies.length ===0){
        return (
             <div className="text-center text-gray-400 text-xl py-12">
                <Film size={64} className="mx-auto mb-4 opacity-50" />
                <p>Aucun film trouvé</p>
             </div>
        );
    }

    //Affichage Grille
    return(
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id} 
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
    );
}

export default MovieList;
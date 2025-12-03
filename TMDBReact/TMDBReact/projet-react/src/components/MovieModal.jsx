import { useEffect } from "react";
import { Star, Calendar } from "lucide-react";
import CONFIG from "../config/constants";

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    if (!movie) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const imageUrl = movie.poster_path 
    ? `${CONFIG.IMAGE_BASE_URL}${movie.poster_path}`
    : CONFIG.PLACEHOLDER_IMAGE;

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in"
    >
      {/* Backdrop clic uniquement */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      />

      <div 
        className="relative bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
      >
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={movie.title}
            className="w-full h-96 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <h2 id="modal-title" className="text-3xl font-bold text-white mb-4">
            {movie.title}
          </h2>
          <div className="flex items-center gap-4 mb-4 text-gray-300">
            <div className="flex items-center text-yellow-400">
              <Star size={20} className="mr-1" fill="currentColor" />
              <span className="text-lg">{rating}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="mr-1" />
              <span>{movie.release_date || 'Date inconnue'}</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {movie.overview || "Aucune description disponible."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;

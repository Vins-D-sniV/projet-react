import CONFIG from '../config/constants';
import { Star,Calendar } from 'lucide-react';


const MovieCard = ({movie, onClick})=>{

    const {title, poster_path, vote_average, release_date} = movie;

    //Construire de l'URL de l'image
    const imageUrl = poster_path
    ? `${CONFIG.IMAGE_BASE_URL}${poster_path}`
    : CONFIG.PLACEHOLDER_IMAGE;

    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';

    const year = release_date ? release_date.split('-')[0] : 'N/A';
     return (
    <div 
        onClick={() => onClick(movie)}
        className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
        role="button"
        tabIndex={0}
        onKeyUp={(e) => e.key === 'Enter' && onClick(movie)}
        >
        <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-80 object-cover"
            loading="lazy"
        />
        <div className="p-4">
            <h3 className="text-white font-semibold text-lg mb-2 truncate" title={title}>
            {title}
            </h3>
            <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-yellow-400">
                <Star size={16} className="mr-1" fill="currentColor" />
                <span>{rating}</span>
            </div>
            <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-1" />
                <span>{year}</span>
            </div>
            </div>
        </div>
        </div>
    );


}

export default MovieCard;
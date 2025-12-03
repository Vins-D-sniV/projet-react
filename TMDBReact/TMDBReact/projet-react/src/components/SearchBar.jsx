import { Search } from 'lucide-react';

// RESPONSABILITÉ : Gérer l'input de recherche
// COMPOSANT CONTRÔLÉ : React contrôle la valeur
// PROPS : searchTerm (valeur), onSearchChange (callback)
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <Search 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
        size={20} 
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        aria-label="Rechercher un film"
      />
    </div>
  );
};

export default SearchBar;
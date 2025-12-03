import CONFIG from '../config/constants';

// POURQUOI séparer la logique API ?
// - Composants = UI uniquement
// - Services = logique métier et appels API
// - Facilite les tests et le mock
// - Réutilisable dans toute l'app

const tmdbApi = {
  // Récupérer les films populaires
  fetchPopularMovies: async () => {
    try {
      const response = await fetch(
        `${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}&language=fr-FR&page=1`
      );

      if (!response.ok) {
        throw new Error('Erreur réseau : ' + response.status);
      }

      const data = await response.json();
      return data.results || [];

    } catch (error) {
      console.error('Erreur fetchPopularMovies:', error);
      throw error;
    }
  },

  // Rechercher des films
  searchMovies: async (query) => {
    try {
      const response = await fetch(
        `${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.API_KEY}&language=fr-FR&query=${encodeURIComponent(query)}&page=1`
      );

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      const data = await response.json();
      return data.results || [];

    } catch (error) {
      console.error('Erreur searchMovies:', error);
      throw error;
    }
  }
};

export default tmdbApi;

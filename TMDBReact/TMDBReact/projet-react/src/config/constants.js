import React,{useState,useEffect} from "react";
import {Search, Star, Calendar, Film} from "lucide-react";

// POURQUOI séparer les constantes ?
// Un seul endroit à modifier si l'API change
// Pas de "magic numbers" dispersés dans le code
// Plus facile à configurer selon l'environnement

const CONFIG = {
    API_KEY:'e2ae462eb298dce84f26cae6a200e7d5',
    BASE_URL:'https://api.themoviedb.org/3',
    IMAGE_BASE_URL:'https://image.tmdb.org/t/p/w500',
    PLACEHOLDER_IMAGE:'https://via.placeholder.com/500x750?text=No+Image'
};

export default CONFIG;
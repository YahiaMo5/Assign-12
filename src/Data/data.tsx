import type { Movie } from "../Type/type";
import heroImg from '../assets/hero.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export const movies: Movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: heroImg,
        release_year: 1994,
        rating: 9.3,
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: reactLogo,
        release_year: 1972,
        rating: 9.2,
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: viteLogo,
        release_year: 2008,
        rating: 9.0,
    },
    {
        id: 4,
        title: "The Dark Knight Rises",
        genre: "Action",
        description: "Eight years after the Joker's reign of anarchy, Batman faces a new masked terrorist, Bane, and the return of Selina Kyle as she seeks to restore order.",
        poster: heroImg,
        release_year: 2012,
        rating: 8.5,
    },
    {
        id: 5,
        title: "Avengers: Endgame",
        genre: "Action",
        description: "The world has been ripped apart by the snap, and the remaining heroes must rally together to reverse the damage and restore balance to the universe.",
        poster: reactLogo,
        release_year: 2019,
        rating: 8.4,
    },
    {
        id: 6,
        title: "Fast and Furious 10",
        genre: "Action",
        description: "Vin Diesel's Dominic Toretto faces his most dangerous adversary yet: his own son. As a deadly plot unfolds, Dominic must rally his team to protect his family and save the world from destruction.",
        poster: viteLogo,
        release_year: 2023,
        rating: 7.2
    }
    
]

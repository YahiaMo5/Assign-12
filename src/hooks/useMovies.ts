import { useState, useEffect } from "react";
import type { Movie } from "../Type/type";
import { movies as AvailableMovies } from "../Data/data";

export function useMovies() {

    const [movies, setMovies] = useState<Movie[]>(() => {
        const saved = localStorage.getItem("movies");
        return saved ? JSON.parse(saved) : AvailableMovies;
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    const deleteMovie = (id: number) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    const resetMovies = () => {
        setMovies(AvailableMovies);
        localStorage.setItem("movies", JSON.stringify(AvailableMovies));
    };

    const genres = ["All", ...Array.from(new Set(AvailableMovies.map((m) => m.genre)))];

    const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
        const matchesGenre = selectedGenre === "All" || movie.genre.toLowerCase() === selectedGenre.toLowerCase();
        return matchesTitle && matchesGenre;
    });

    return {
        movies,
        filteredMovies,
        deleteMovie,
        resetMovies,
        searchTerm,
        setSearchTerm,
        selectedGenre,
        setSelectedGenre,
        genres,
    };
}

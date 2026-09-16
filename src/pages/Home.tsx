import React from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export const Home: React.FC = () => {
    const { filteredMovies, deleteMovie, resetMovies, searchTerm, 
            setSearchTerm, selectedGenre, setSelectedGenre, genres 
        } = useMovies();

    return (
        <div className="home-container">
            <header className="page-header">
                <h1>Movie Explorer</h1>
            </header>

            <div className="filter-bar">
                <input type="text" placeholder="Search movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="genre-select">
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre === "All" ? "All Genres" : genre}
                        </option>
                    ))}
                </select>
            </div>

            {filteredMovies.length === 0 ? (
                <div className="no-movies">
                    <p>No movies found matching your criteria.</p>
                    <button onClick={resetMovies} className="btn-reset">
                        Reset Movies
                    </button>
                </div>
            ) : (
                <div className="movie-grid">
                    {filteredMovies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <img src={movie.poster} alt={movie.title} className="movie-poster" onError={(e) => {
                                    (e.target as HTMLImageElement).src = "../assets/hero.png";
                                }}
                            />
                            <div className="movie-info">
                                <h2 className="movie-title">{movie.title}</h2>
                                <div className="movie-meta">
                                    <span>
                                        <strong>Genre:</strong> {movie.genre}
                                    </span>
                                    <hr/>
                                    <span>
                                        <strong>Year:</strong> {movie.release_year}
                                    </span>
                                </div>
                                <p className="movie-rating">
                                    <strong>Rating:</strong> {movie.rating} / 10
                                </p>

                                <div className="card-actions">

                                    <Link to={`/movies/${movie.id}`} className="btn-details">
                                        View Details
                                    </Link>

                                    <button type="button" onClick={() => deleteMovie(movie.id)} className="btn-delete">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

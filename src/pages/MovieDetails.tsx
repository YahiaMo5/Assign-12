import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Movie } from "../Type/type";
import { movies as AvailableMovies } from "../Data/data";

export const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const movieId = Number(id);

            if (!id || isNaN(movieId)) {
                setError("Invalid movie ID");
                setIsLoading(false);
                return;
            }

            const saved = localStorage.getItem("movies");
            const currentMovies: Movie[] = saved ? JSON.parse(saved) : AvailableMovies;

            const foundMovie = currentMovies.find((m) => m.id === movieId);

            if (foundMovie) {
                setMovie(foundMovie);
                setError(null);
            } else {
                setError("Movie has been removed or does not exist");
            }

            setIsLoading(false);
        }, 150);

        return () => clearTimeout(timer);
    }, [id]);

    const handleBack = () => {
        navigate("/");
    };

    if (isLoading) {
        return (
            <div className="details-container">
                <p className="status-message">loading details</p>
            </div>
        );
    }

    if (error || !movie) {
        return (
            <div className="details-container">
                <div className="error-box">
                    <h2>Error</h2>
                    <p>{error || "Movie not found"}</p>
                    <button onClick={handleBack} className="btn-back">
                        Back to Movies
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="details-container">
            <button onClick={handleBack} className="btn-back">
                Back to Movies
            </button>

            <div className="details-card">
                <img src={movie.poster} alt={movie.title} className="details-poster" onError={(e) => {
                        (e.target as HTMLImageElement).src =
                            "../assets/vite.svg";
                    }}
                />

                <div className="details-content">
                    <h1 className="details-title">{movie.title}</h1>

                    <div className="details-info-list">
                        <p>
                            <strong>Genre:</strong> {movie.genre}
                        </p>
                        <p>
                            <strong>Release Year:</strong> {movie.release_year}
                        </p>
                        <p>
                            <strong>Rating:</strong> {movie.rating} / 10
                        </p>
                    </div>

                    <div className="details-description">
                        <h3>Description</h3>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

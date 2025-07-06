import React from "react";

interface MovieDetailsProps {
  movie: {
    Title: string;
    Year: string;
    Genre: string;
    Plot: string;
    Poster: string;
    imdbID: string;
  };
  onClose: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsProps> = ({ movie, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    onClick={e => {
      if (e.target === e.currentTarget) onClose();
    }}
  >
    <div className="card" onClick={e => e.stopPropagation()}>
      <button
        className="card-modal-close"
        onClick={onClose}
        aria-label="Zamknij"
      >
        ×
      </button>
      <div className="card-modal-content">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/220x320?text=No+Image"}
          alt={movie.Title}
          className="card-modal-img"
        />
        <div className="card-modal-details">
          <div className="card-modal-title">{movie.Title} <span style={{fontWeight:400, color:'#43ffb4'}}>({movie.Year})</span></div>
          <div className="card-modal-genre">{movie.Genre}</div>
          <div className="card-modal-plot">{movie.Plot}</div>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetailsModal;

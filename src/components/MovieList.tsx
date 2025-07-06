import React from "react";

interface MovieListProps {
  movies: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
    imdbRating?: string;
  }[];
  onMovieClick: (id: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => (
  <div className="flex flex-wrap gap-8 justify-center mt-10">
    {movies.map(movie => (
      <div
        key={movie.imdbID}
        className="movie-result relative flex flex-col items-center w-64 min-h-[400px] min-w-[180px] p-0 bg-white/10 rounded-2xl shadow-xl cursor-pointer hover:scale-[1.04] transition border border-white/10 pb-14"
        onClick={() => onMovieClick(movie.imdbID)}
      >
        <div className="w-full aspect-[2/3] flex items-start justify-center overflow-hidden rounded-t-2xl bg-neutral-800" style={{ minHeight: '260px', minWidth: '160px', padding: 0 }}>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/160x240?text=No+Image"}
            alt={movie.Title}
            className="object-cover h-full w-full max-h-full max-w-full rounded-t-2xl"
            style={{ objectPosition: 'top' }}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center text-white w-full px-4 py-4">
          <strong className="block text-base font-semibold break-words whitespace-normal max-w-full w-full" style={{wordBreak:'break-word'}}>{movie.Title}</strong>
        </div>
        {/* Powiększona zielona ramka na ocenę i rok */}
        {(movie.imdbRating || movie.Year) && (
          <div className="absolute left-2 bottom-2 flex items-center gap-3 bg-emerald-400/90 text-black text-base font-bold px-6 py-3 rounded-2xl shadow min-w-[130px] min-h-[44px]">
            {movie.imdbRating && <span>⭐ {movie.imdbRating}</span>}
            {movie.Year && <span className="ml-1 text-base text-black/80">{movie.Year}</span>}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default MovieList;

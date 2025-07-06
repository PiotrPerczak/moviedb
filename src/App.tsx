import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MovieList from "@/components/MovieList";
import MovieDetailsModal from "@/components/MovieDetailsModal";
import Navbar from "@/components/Navbar";
import "./App.css";

const API_KEY = "d1fe5768";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbRating?: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbID: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<MovieDetails | null>(null);
  const [activeTab, setActiveTab] = useState("search");
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [topLoading, setTopLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      if (data.Search) {
        // Pobierz oceny dla każdego filmu
        const moviesWithRatings = await Promise.all(
          data.Search.map(async (movie: Movie) => {
            try {
              const detailsRes = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
              const details = await detailsRes.json();
              return { ...movie, imdbRating: details.imdbRating };
            } catch {
              return { ...movie };
            }
          })
        );
        setMovies(moviesWithRatings);
      } else {
        setMovies([]);
      }
    } catch {
      setMovies([]);
    }
    setLoading(false);
  };

  const handleMovieClick = async (id: string) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
      const data = await res.json();
      setSelected({
        Title: data.Title,
        Year: data.Year,
        Genre: data.Genre,
        Plot: data.Plot,
        Poster: data.Poster,
        imdbID: data.imdbID,
      });
    } catch {
      setSelected(null);
    }
  };

  const closeModal = () => setSelected(null);

  // Przykładowe tytuły top filmów i seriali (możesz zmienić na inne, jeśli chcesz)
  const topTitles = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "Fight Club",
    "The Matrix",
    "Breaking Bad",
    "Game of Thrones",
    "The Sopranos",
    "Stranger Things"
  ];

  // Pobieranie top filmów/seriali po wejściu w zakładkę
  useEffect(() => {
    if (activeTab === "top" && topMovies.length === 0 && !topLoading) {
      setTopLoading(true);
      Promise.all(
        topTitles.map(title =>
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
            .then(res => res.json())
        )
      ).then(results => {
        // Dodaj imdbRating do każdego filmu
        setTopMovies(results.filter(m => m && m.imdbID).map(m => ({ ...m, imdbRating: m.imdbRating })));
        setTopLoading(false);
      });
    }
  }, [activeTab]);

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-28">
        {activeTab === "search" && (
          <div className="flex min-h-svh flex-col items-center justify-start gap-4 mt-2">
            <div className="flex gap-2 mt-2">
              <input
                className="border rounded px-2 py-1"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Wpisz tytuł filmu"
              />
              <Button onClick={handleSearch} disabled={loading}>
                {loading ? "Szukam..." : "Szukaj"}
              </Button>
            </div>
            <MovieList movies={movies} onMovieClick={handleMovieClick} />
          </div>
        )}
        {activeTab === "top" && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-white text-xl font-semibold opacity-90 mt-2">
            {topLoading ? (
              <span>Ładowanie najlepszych filmów i seriali...</span>
            ) : (
              <MovieList movies={topMovies} onMovieClick={handleMovieClick} />
            )}
          </div>
        )}
        {selected && (
          <MovieDetailsModal movie={selected} onClose={closeModal} />
        )}
      </div>
    </>
  );
}

export default App;

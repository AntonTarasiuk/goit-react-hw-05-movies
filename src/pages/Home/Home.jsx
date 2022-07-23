import { apiTrandingMovies } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { MainContentWrapper } from "./Home.styled";

const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    apiTrandingMovies().then(res => setTrendingMovies(res.results));
  }, []);

  return (
    <>
      {trendingMovies.length > 0 && (
        <MainContentWrapper>
          <h2>Trending today</h2>
          <ul>
            {trendingMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {movie.title ?? movie.original_name}
                </Link>
              </li>
            ))}
          </ul>
        </MainContentWrapper>
      )}
    </>
  );
};

export default Home;
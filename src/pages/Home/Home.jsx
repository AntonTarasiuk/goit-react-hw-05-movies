import { apiTrandingMoves } from "services/apiGetMovies/apiGetMovies";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";

export const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    apiTrandingMoves().then(res => setTrendingMovies(res.results));
  }, []);

  return (
    <>
      {trendingMovies.length > 0 && (
        <ul>
          {trendingMovies.map(item => (
    
            <li key={item.id}>
              <Link to='/trending_movie'>
                {item.title ?? item.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
  
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Suspense fallback={<h1>Loading...</h1> }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='movies/:movieId' element={< MovieDetails />}>
              <Route path='cast' element={< Cast />} />
              <Route path='reviews' element={< Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};


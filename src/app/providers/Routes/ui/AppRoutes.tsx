import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { routeConfig } from '../lib/config';

export function AppRoutes() {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<ClipLoader className="center" loading color="#593d88" size={100} />}>
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

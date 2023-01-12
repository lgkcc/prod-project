import { Suspense, useEffect } from 'react';
import cn from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRoutes } from './providers/Routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initialData());
  }, [dispatch]);
  return (
    <div className={cn('app', {}, [])}>
      <Suspense fallback={<ClipLoader className="center" loading color="#593d88" size={100} />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
}

export default App;

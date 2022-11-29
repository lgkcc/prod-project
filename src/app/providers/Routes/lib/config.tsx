import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { RouterPaths } from 'shared/config/routeConfig/routesPaths';

export const routeConfig: RouteProps[] = [
  {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
];

import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './components/Store';
import GameDetails from './components/GameDetails';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'store', element: <Store /> },
  { path: 'game/:id', element: <GameDetails /> },
]);

export default router;

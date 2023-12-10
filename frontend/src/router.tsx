import { createBrowserRouter } from 'react-router-dom';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';

const isCheckAuth: boolean = false;

const CheckedPrivateRoutes = isCheckAuth ? PrivateRoutes() : [];

const router = createBrowserRouter([
  ...CheckedPrivateRoutes,
  ...PublicRoutes(),
]);

export default router;

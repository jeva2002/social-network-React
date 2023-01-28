import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../../App';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
);

export default router;

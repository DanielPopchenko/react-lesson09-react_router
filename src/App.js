import { Route, Routes } from 'react-router-dom';
import './reset.css';
import 'modern-normalize/modern-normalize.css';
import './index.css';
// ! Вместо Switch  в v6 версии сделали Routes

import routes from './routes';

import Home from './views/Home';
import Shows from './views/Shows/Shows';
import ShowDetails from './views/showDetails/ShowDetails';
import NotFound from './views/NotFound';
import AppBar from './components/AppBar/AppBar';
// import { SignupForm } from './components/FormikForm';

export default function App() {
  return (
    <>
      <AppBar />

      {/* <SignupForm /> */}

      <Routes>
        <Route path={routes.home} element={<Home />} exact />
        <Route path={routes.shows} element={<Shows />} />
        <Route path={routes.showDetails} element={<ShowDetails />}></Route>
        {/* <Redirect to="/" /> */}
        <Route path={routes.all} element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

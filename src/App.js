import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import UsersView from './views/UsersView';
import NotFoundView from './NotFoundView';
import UserDetailsView from './views/UserDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} exact />
        <Route path="/authors" element={<AuthorsView />} />
        <Route path="/users" element={<UsersView />} />
        <Route path="/users/:userID" element={<UserDetailsView />} exact />

        {/* ! path="*" - указывает что если сверзу вниз ни один path не подошел, то рендерит этот елемент ! */}
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
    </Container>
  );
}

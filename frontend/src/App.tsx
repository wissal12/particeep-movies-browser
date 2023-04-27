import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DEFAULT_ROUTE, ROUTES } from './routes';
import { Movies } from './pages/Movies';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.MOVIES} element={<Movies />} />
      <Route path='*' element={<Navigate replace to={DEFAULT_ROUTE} />} />
    </Routes>
  </BrowserRouter>
);

export default App;

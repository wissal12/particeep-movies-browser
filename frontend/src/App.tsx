import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DEFAULT_ROUTE, ROUTES } from './routes';
import { Movies } from './pages';
import { Provider } from 'react-redux';
import { store } from './redux-store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MOVIES} element={<Movies />} />
        <Route path='*' element={<Navigate replace to={DEFAULT_ROUTE} />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

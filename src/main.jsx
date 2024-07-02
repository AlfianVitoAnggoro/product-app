import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import ProductsPages from './pages/products';
import Error404Page from './pages/404';
import ProfilePages from './pages/profile';
import DetailProductPages from './pages/detailProduct';
import { Provider } from 'react-redux';
import store from './redux/store';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPriceContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>,
    errorElement: <Error404Page />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'products',
    element: <ProductsPages />,
  },
  {
    path: 'products/:id',
    element: <DetailProductPages />,
  },
  {
    path: 'profile',
    element: <ProfilePages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
);

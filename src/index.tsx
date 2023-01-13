import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './routes/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }]
  }
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

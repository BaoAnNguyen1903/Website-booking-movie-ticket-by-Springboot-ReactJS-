import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";  
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import './styles/global.css'
import App from './App';
import ErrorPage from './pages/error';
import UserPage from './pages/user';
import BookPage from './pages/book';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>homepage child</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users",
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/lich-chieu-phim",
        element: <div>lich chieu phim</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/phim-dang-chieu",
        element: <div>phim dang chieu</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/phim-sap-chieu",
        element: <div>phim sap chieu</div>,
        errorElement: <ErrorPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

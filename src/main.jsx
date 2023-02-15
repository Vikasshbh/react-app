import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import About from './components/About/About';
import Layout from './components/Layout';
// import ContactPage from './components/ContactPage/ContactPage';
import Classespage from './components/ClassesPage/Classespage';
import Error from './components/ErrorPage/Error';
import TrainerPage from './components/TrainerPage/TrainerPage';
import './assets/css/style.css';
import JoinUs from './components/Crud/JoinUS/JoinUs';
import MemberPage from './components/MemberPage/MemberPage';



const BASE_SLUG = 'react-app';
console.log(BASE_SLUG);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:BASE_SLUG,
        element: <Homepage />
      },
      {
        path: `${BASE_SLUG}/about`,
        element: <About />,
      },
      {
        path: `${BASE_SLUG}/members`,
        element: <MemberPage />,
      },
      {
        path: `${BASE_SLUG}/classes`,
        element: <Classespage />,
      },
      {
        path: `${BASE_SLUG}/trainer`,
        element: <TrainerPage />,
      },
      {
        path: `${BASE_SLUG}/join-us`,
        element: <JoinUs />,
      },
      {
        path: `${BASE_SLUG}/*`,
        element: <Error />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

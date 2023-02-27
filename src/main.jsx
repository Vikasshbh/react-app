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
// import TrainerPage from './components/TrainerPage/TrainerPage';
import './assets/css/style.css';
import JoinUs from './components/Crud/JoinUS/JoinUs';
import Members from './components/MemberPage/Members';
// import Signup from './components/Member/Signup';
// import Signin from './components/Member/Signin';
// import Shopping from './components/Member/Shopping';
import Cart from './components/Cart/Cart';
import Register from './components/Cart/Register';
import Login from './components/Cart/Login';
import Products from './components/Cart/Products';




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
        element: <Members />,
      },
      {
        path: `${BASE_SLUG}/classes`,
        element: <Classespage />,
      },
      // {
      //   path: `${BASE_SLUG}/trainer`,
      //   element: <TrainerPage />,
      // },
      {
        path: `${BASE_SLUG}/join-us`,
        element: <JoinUs />,
      },
      // {
      //   path: `${BASE_SLUG}/signup`,
      //   element: <Signup />,
      // },
      // {
      //   path: `${BASE_SLUG}/signin`,
      //   element: <Signin />,
      // },
      // {
      //   path: `${BASE_SLUG}/shopping`,
      //   element: <Shopping />,
      // },
      {
        path: `${BASE_SLUG}/register`,
        element: <Register />,
      },
      {
        path: `${BASE_SLUG}/login`,
        element: <Login />,
      },
      {
        path: `${BASE_SLUG}/cart`,
        element: <Cart />,
      },
      {
        path: `${BASE_SLUG}/products`,
        element: <Products />,
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

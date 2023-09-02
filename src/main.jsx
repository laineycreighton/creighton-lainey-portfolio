import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Error from './pages/Error';
// import Home from './pages/Home';
import About from './components/pages/About.jsx';
// import Contact from './components/pages/Contact';
// import Portfolio from './components/pages/Portfolio';
// import Work from './components/pages/Work';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        path: '/',
        element: <About />,
      },
      // {
      //   path: 'contact',
      //   element: <Contact />,
      // },
      // {
      //   path: 'portfolio',
      //   element: <Portfolio />,
      // },
      // {
      //   path: 'work',
      //   element: <Work />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
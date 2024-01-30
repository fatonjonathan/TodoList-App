import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Card from './components/Card.jsx'
import Apropos from './components/Apropos.jsx'
import Erreur404 from './components/Erreur404.jsx'


// liste des routes 
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/modifier/:id",
    element: <h2>Bien c'est ici la modification de l'élément ce passe</h2>
  },
  {
    path: "/apropos",
    element: <Apropos />,
    //Route Nexted nécessite Outlet pour afficher les enfants
    children: [
      {
        path: "/apropos/contact",
        element: <h3>Formulaire de contact</h3>
      },
      {
        path: "/apropos/offres",
        element: <h3>Liste de offres et services</h3>
      }
    ]
  },
  {
    path: "*",
    element: <Erreur404 />,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ici je définis la route comme  */}
  <RouterProvider router={route}/>
  </React.StrictMode>,
)

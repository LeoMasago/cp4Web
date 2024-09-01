import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; /* importando react router dom */
import App from './App.jsx'; /* necessário importar qualquer componente que for utilizar */
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx';
import './index.css';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

const router = createBrowserRouter([
  {
    path: "/", /* caminho */
    element: <App />, /* elemento para ser renderizado */
    children: [
      { index: true, element: <ConteudoPrincipal /> }, /* Rota principal */
      { path: "/sobre", element: <Sobre /> }, 
      { path: "/contato", element: <Contato /> }/* rota filha */
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* provedor de rotas */}
  </React.StrictMode>,
)

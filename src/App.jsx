import Header from './Componentes/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App

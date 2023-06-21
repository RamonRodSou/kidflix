import './App.css';
import { Banner } from './Banner/Banner';
import { InicialNav } from './Header/Header';
import { Navegacao } from './NavPrincipal/NavPrincipal';

function App() {
  return (
    <>
      <InicialNav/>
      <Navegacao/>
      <Banner/>
    </>

  );
}

export default App;

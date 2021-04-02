import { Counter } from './components/counter';
import { Usuario } from './components/usuario';

import { TimerPadre } from './components/timerPadre';
import { ContadorRed } from './components/contadorRed';
import { Formulario } from './components/formulario';



function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <Counter />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerPadre/>

      <h2>useReducer</h2>
      <hr/>
      <ContadorRed/>

      <h2>customHooks</h2>
      <hr/>
      <Formulario/>

      

    </>
  );
}

export default App;

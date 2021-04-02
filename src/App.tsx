import { Counter } from './components/counter';
import { Usuario } from './components/usuario';

import { TimerPadre } from './components/timerPadre';



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

    </>
  );
}

export default App;

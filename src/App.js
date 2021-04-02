

import { Pagina1 } from './components/Pagina1';
import { Pagina2 } from './components/Pagina2';

import { BotonCambiarData } from './components/BotonCambiarData';
import { useState } from 'react';
import { DataProvider } from './context/DataContext';

const DataFix = {
    nombre:'Esterlyn',
    edad:16
}

function App() {

    const [Data, setData] = useState(DataFix)


    return (
        <DataProvider>
        <div className='container'>
            <Pagina1 Data={Data}/>
            <Pagina2 Data={Data}/>

            <BotonCambiarData setData={setData}/>
        </div>
        </DataProvider>
    );
}

export default App;
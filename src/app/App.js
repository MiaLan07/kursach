
import MainPage from '../pages/main';
import NavMenu from '../shared/menu';
import OpisPage from '../pages/opis';
import ChemesPage from '../pages/chemes';
import { useRef } from 'react';

function App() {
    const targRefMain = useRef(null)
    const targRefChem = useRef(null)

    return (
        <div className="App">
            <NavMenu targRefMain={targRefMain} targRefChem={targRefChem}></NavMenu>
            <MainPage targRefMain={targRefMain}></MainPage>
            <OpisPage></OpisPage>
            <ChemesPage targRefChem={targRefChem}/>
        </div>
    );
}

export default App;

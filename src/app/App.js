
import MainPage from '../pages/main';
import NavMenu from '../shared/menu';
import OpisPage from '../pages/opis';
import ChemesPage from '../pages/chemes';
import { useRef } from 'react';

function App() {
    const targRefMain = useRef(null)

    return (
        <div className="App">
            <NavMenu targRef={targRefMain}></NavMenu>
            <MainPage targRefMain={targRefMain}></MainPage>
            <OpisPage></OpisPage>
            <ChemesPage/>
        </div>
    );
}

export default App;

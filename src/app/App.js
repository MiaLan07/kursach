
import MainPage from '../pages/main';
import NavMenu from '../shared/menu';
import OpisPage from '../pages/opis';
import ChemesPage from '../pages/chemes';
import HomesPage from '../pages/actualhouses';
import { useRef } from 'react';

function App() {
    const targRefMain = useRef(null)
    const targRefChem = useRef(null)
    const targRefOffers = useRef(null)

    return (
        <div className="App">
            <NavMenu targRefMain={targRefMain} targRefChem={targRefChem} targRefOffer={targRefOffers}></NavMenu>
            <MainPage targRefMain={targRefMain}></MainPage>
            <OpisPage></OpisPage>
            <ChemesPage targRefChem={targRefChem}/>
            <HomesPage refOffers={targRefOffers}/>
        </div>
    );
}

export default App;

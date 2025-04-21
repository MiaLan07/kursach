
import MainPage from '../pages/main';
import NavMenu from '../shared/menu';
import OpisPage from '../pages/opis';
import { useRef } from 'react';

function App() {
    const targRef = useRef(null)

    return (
        <div className="App">
            <NavMenu targRef={targRef}></NavMenu>
            <MainPage targRef={targRef}></MainPage>
            <OpisPage></OpisPage>
        </div>
    );
}

export default App;

import { ReactComponent as Logo } from '../imgs/logo.svg'

export default function NavMenu({ targRefMain, targRefChem }) {
    function handleClickMain() {
        if(targRefMain.current) {
            targRefMain.current.scrollIntoView({ behavior: "smooth"})
        }
    }
    function handleClickChem() {
        if(targRefChem.current) {
            targRefChem.current.scrollIntoView({ behavior: "smooth"})
        }
    }

    return (
        <div className="nav">
                <a onClick={handleClickMain}><Logo height={55} width={55}></Logo></a>
                <a onClick={handleClickMain}><h7 className="compName">Дом здесь</h7></a>
            <div className="menu">
                <a onClick={handleClickChem}>Районы</a>
                <a>Секция 2</a>
                <a>Секция 3</a>
            </div>
        </div>
    )
}

import { ReactComponent as Logo } from '../imgs/logo.svg'

export default function NavMenu({ targRef }) {
    function handleClickMain() {
        if(targRef.current) {
            targRef.current.scrollIntoView({ behavior: "smooth"})
        }
    }

    return (
        <div className="nav">
            <a onClick={handleClickMain}><Logo height={75} width={75}></Logo></a>
            <a onClick={handleClickMain}><h7 className="compName">Дом здесь</h7></a>
        </div>
    )
}
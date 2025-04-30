import { ReactComponent as Logo } from '../imgs/icons/лого-min.svg'

export default function NavMenu({ targRefMain, targRefOffer, targPlusRef, targRevPage }) {
    function handleClickMain() {
        if(targRefMain.current) {
            targRefMain.current.scrollIntoView({ behavior: "smooth"})
        }
    }
    function handleClickOffe() {
        if(targRefOffer.current) {
            targRefOffer.current.scrollIntoView({ behavior: 'smooth'})
        }
    }
    function handleClickPluses() {
        if(targPlusRef.current) {
            targPlusRef.current.scrollIntoView({ behavior: "smooth"})
        }
    }
    function handleClickRevs() {
        if(targRevPage.current) {
            targRevPage.current.scrollIntoView({ behavior: 'smooth'})
        }
    }

    return (
        <div className="nav">
                <a onClick={handleClickMain}><Logo height={55} width={55}></Logo></a>
                <a onClick={handleClickMain}><h7 className="compName">Дом здесь</h7></a>
            <div className="menu">
                <a onClick={handleClickOffe}>Квартиры</a>
                <a onClick={handleClickPluses}>Преимущества</a>
                <a onClick={handleClickRevs}>Отзывы</a>
            </div>
        </div>
    )
}

import { ReactComponent as Logo } from '../imgs/icons/лого-min.svg'
import { useState } from 'react';

export default function NavMenu({ targRefMain, targRefOffer, targPlusRef, targRevPage, targRegFAQ, targAbPage }) {
    function handleClickMain() {
        if (targRefMain.current) {
            window.scrollTo({
                top: targRefMain.current.offsetTop - 90,
                behavior: "smooth"
            });
        }
    }
    function handleClickOffe() {
        if (targRefOffer.current) {
            window.scrollTo({
                top: targRefOffer.current.offsetTop - 100,
                behavior: "smooth"
            });
        }
    }
    function handleClickPluses() {
        if (targPlusRef.current) {
            window.scrollTo({
                top: targPlusRef.current.offsetTop - 90,
                behavior: "smooth"
            });
        }
    }
    function handleClickRevs() {
        if (targRevPage.current) {
            window.scrollTo({
                top: targRevPage.current.offsetTop - 90,
                behavior: "smooth"
            });
        }
    }
    function handleClickFAQ() {
        if (targRegFAQ.current) {
            window.scrollTo({
                top: targRegFAQ.current.offsetTop - 90,
                behavior: "smooth"
            });
        }
    }
    function handleClickAb() {
        if (targAbPage.current) {
            window.scrollTo({
                top: targAbPage.current.offsetTop - 25,
                behavior: "smooth"
            });
        }
    }
    const [isMenuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className="nav">
                <a onClick={handleClickMain}><Logo height={55} width={55}></Logo></a>
                <a onClick={handleClickMain}><h7 className="compName">Дом здесь</h7></a>

            <button className="burger-menu" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <a onClick={handleClickOffe}>Квартиры</a>
                <a onClick={handleClickPluses}>Преимущества</a>
                <a onClick={handleClickRevs}>Отзывы</a>
                <a onClick={handleClickAb}>О компании</a>
                <a onClick={handleClickFAQ}>FAQ</a>
            </div>
        </div>
    )
}

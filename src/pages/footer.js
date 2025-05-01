import React from "react";

export default function Footer() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <footer className="footer">
            <h2>Начните свой путь к комфортному жилью уже сегодня!</h2>
            <div className="contacts">
                <p>+7 (978) 123-45-67</p>
                <p>info@company.com</p>
                <p>г. Симферополь, ул. Камская, д. 5, офис 501</p>
                <button className="btnForm" onClick={scrollToTop}>Наверх ↑</button>
            </div>
        </footer>
    );
}
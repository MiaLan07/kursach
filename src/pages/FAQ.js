import { useState } from "react";
import FAQItem from "../shared/FAQitem.js";

export default function FAQPage({ targFaqPage }) {
    const [activeFaq, setActiveFaq] = useState(null);

    function toggleFaq (index) {
        setActiveFaq(activeFaq === index ? null : index);
    }

    const faqData = [
        { question: "Как быстро можно купить готовую квартиру?", answer: "Все квартиры готовы к заселению. Сделка может быть оформлена в течение нескольких дней." },
        { question: "Какие гарантии качества мебели и ремонта?", answer: "Каждый объект проходит проверку перед продажей. Мы гарантируем качество мебели и ремонта." },
        { question: "Можно ли купить квартиру для сдачи в аренду?", answer: "Да! Наши меблированные квартиры идеально подходят для аренды." },
        { question: "Предоставляете ли вы юридическое сопровождение сделки?", answer: "Да, мы полностью сопровождаем сделку, включая проверку документов." },
        { question: "Какие районы доступны для выбора?", answer: "Мы предлагаем квартиры в разных районах города, включая центр и тихие районы." }
    ];

    return (
        <div className="faq" ref={targFaqPage}>
            <h2>Часто задаваемые вопросы</h2>
            <div className="faqlist">
                {faqData.map((faq, i) => (
                    <FAQItem key={i} faq={faq} toggleFaq={toggleFaq} index={i} activeFaq={activeFaq} />
                ))}
            </div>
        </div>
    );
}

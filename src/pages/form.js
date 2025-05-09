import { useState } from "react";

export default function Form({ targForm, opisForForm, setOpisForForm }) {
    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');

    function handleName(e) {
        setNames(e.target.value);
    }
    function handleNumber(e) {
        setNumber(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleService(e) {
        setService(e.target.value);
    }
    function handleOpisForForm(e) {
        setOpisForForm(e.target.value);
    }

    function uploadForm(event) {
        event.preventDefault();
        const phoneRegex = /^(\+7|8)?\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^\S+\s+\S+/;

        if (!phoneRegex.test(number)) {
            alert("Введите корректный номер телефона (+7XXXXXXXXXX или 8XXXXXXXXXX)!");
            return;
        }

        if (email && !emailRegex.test(email)) {
            alert("Введите корректный email!");
            return;
        }
        if(!nameRegex.test(names)) {
            alert("Введите хотя-бы имя и фамилию")
            return
        }

        if (!service) {
            alert("Выберите услугу!");
            return;
        }
        console.log("Форма отправлена:", { names, number, email, service, opisForForm });

        setNames('');
        setNumber('');
        setEmail('');
        setService('');
        setOpisForForm('');
    }

    return (
        <div className="form" ref={targForm}>
            <h2>Свяжитесь с нами</h2>
            <p>Оставьте заявку, и мы свяжемся с вами в ближайшее время, чтобы обсудить детали!</p>
            <form onSubmit={uploadForm}>
                <div>
                    <label htmlFor="names">Ваши имя, фамилия и отчество</label>
                    <input type="text" id="names" placeholder="Иванов Иван Иванович" required value={names} onChange={handleName}/>
                </div>
                <div>
                    <label htmlFor="number">Ваш номер телефона</label>
                    <input type="tel" id="number" placeholder="+70000000000" required value={number} onChange={handleNumber}/>
                </div>
                <div>
                    <label htmlFor="email">Ваша почта</label>
                    <input type="email" id="email" placeholder="ivanov@mail.com" value={email} onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="service">Тип услуги</label>
                    <select id="service" required onChange={handleService} value={service}>
                        <option value="">Выберите услугу</option>
                        <option value="Покупка">Покупка</option>
                        <option value="Продажа">Продажа</option>
                        <option value="Аренда">Аренда</option>
                        <option value="Консультация">Консультация по инвестициям</option>
                        <option value="Сопровождение">Юридическое сопровождение сделки</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Ваши пожелания</label>
                    <textarea id="comment" placeholder="Например, что конкретно вы хотите приобрести/продать" value={opisForForm} onChange={handleOpisForForm}></textarea>
                </div>
                <button className="btnForm" type="submit">Оставить заявку</button>
            </form>
        </div>
    );
}

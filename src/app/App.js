
import MainPage from '../pages/main';
import NavMenu from '../shared/menu';
import OpisPage from '../pages/opis';
import ChemesPage from '../pages/chemes';
import HomesPage from '../pages/actualhouses';
import { useRef, useState } from 'react';

function App() {
    const [fullscreenTag, setFullTag] = useState(null)
    const targRefMain = useRef(null)
    const targRefChem = useRef(null)
    const targRefOffers = useRef(null)
    const images = ['https://penzavzglyad.ru/images/uploads/%D0%B5%D0%B2%D1%80%D0%BE%D0%B4%D0%B2%D1%83%D1%88%D0%BA%D0%B0.jpg', 'https://doka-stroi.ru/upload/iblock/817/dzouozy7zaiwb5dckg08shaf8ycn4kjp.png', 'https://i.pinimg.com/originals/21/03/5e/21035ed43cd2301052d8309edf6ed0f7.jpg']

    return (
        <div className="App">
            <NavMenu targRefMain={targRefMain} targRefChem={targRefChem} targRefOffer={targRefOffers}></NavMenu>
            <MainPage targRefMain={targRefMain}></MainPage>
            <OpisPage></OpisPage>
            <ChemesPage targRefChem={targRefChem}/>
            <HomesPage refOffers={targRefOffers} fullscreenTag={fullscreenTag} setFullTag={setFullTag} images={images}/>

            
            {fullscreenTag === 'first' && (<div className="fulloffer" id='first' onClick={() => setFullTag(null)}>
                <h3>Евро-двушка в ЖК &laquo;Омега3&raquo;</h3>
                <img src={images[0]} alt={`Фото 1`} onClick={() => setFullTag(images[0])} className="carousel-img"/>
                <div className="costs homes">
                    <div>
                        <h6>48м<sup>2</sup></h6>
                        <p>площадь</p>
                    </div>
                    <div>
                        <h6>5 280 000 р.</h6>
                        <p>стоимость</p>
                    </div>
                    <div>
                        <h6>110 000 р.</h6>
                        <p>за м<sup>2</sup></p>
                    </div>
                </div>
                <p>Эта евро-двушка предлагает просторную кухню-гостиную площадью 22 кв.м, что позволяет создать уютное пространство для отдыха и приема гостей. Спальня обеспечивает комфорт и уединение, а панорамные окна наполняют квартиру естественным светом. Ванная комната оборудована современной сантехникой, а балкон станет отличным местом для утреннего кофе с видом на реку.</p><p>ЖК &laquo;Омега3&raquo; предлагает развитую инфраструктуру: детские и спортивные площадки, зоны отдыха, гостевую парковку и системы видеонаблюдения для безопасности жителей. Близость к центральному автовокзалу, школе и гипермаркету делает этот вариант особенно удобным для семей и активных горожан.</p>
                <button className="btnForm" onClick={() => {setFullTag(null)}}>Купить</button>
            </div>)}
            {fullscreenTag === 'second' && (<div className="fulloffer" id="second" onClick={() => setFullTag(null)}>
                <h3>3-х комнатная квартира в Киевском районе</h3>
                <img src={images[1]} alt={`Фото 2`} onClick={() => setFullTag(images[1])} className="carousel-img"/>
                <div className="costs homes">
                        <div>
                            <h6>85м<sup>2</sup></h6>
                            <p>площадь</p>
                        </div>
                        <div>
                            <h6>9 775 000р.</h6>
                            <p>стоимость</p>
                        </div>
                        <div>
                            <h6>115 000р.</h6>
                            <p>за м<sup>2</sup></p>
                        </div>
                </div>
                <p>Квартира включает три светлые комнаты с высокими потолками, просторную кухню с современной техникой и стильным гарнитуром, а также две ванные комнаты с качественной сантехникой. В гостиной установлены панорамные окна, которые наполняют пространство естественным светом и открывают прекрасный вид на парк с прудом.</p><p>Жильё расположено в доме с благоустроенной территорией, где есть большая парковка, детская площадка и зоны отдыха. В шаговой доступности находятся школа, спортивный зал, крупный продуктовый магазин и остановки общественного транспорта, обеспечивающие удобное сообщение с другими районами города.</p>
                <button className="btnForm" onClick={() => {setFullTag(null)}}>Купить</button>
            </div>)}
            {fullscreenTag === 'third' && (<div className="fulloffer" id="third" onClick={() => setFullTag(null)}>
                <h3>Студия в ЖК &laquo;Омега3&raquo;</h3>
                <img src={images[2]} alt={`Фото 3`} onClick={() => setFullTag(images[2])} className="carousel-img"/>
                <div className="costs homes">
                        <div>
                            <h6>32м<sup>2</sup></h6>
                            <p>площадь</p>
                        </div>
                        <div>
                            <h6>3 520 000р.</h6>
                            <p>стоимость</p>
                        </div>
                        <div>
                            <h6>110 000р.</h6>
                            <p>за м<sup>2</sup></p>
                        </div>
                </div>
                <p>Эта студия предлагает открытую планировку, создающую ощущение простора и комфорта. Кухонная зона оборудована современной техникой и удобной рабочей поверхностью, а зона отдыха позволяет разместить удобный диван или кровать. Панорамные окна наполняют квартиру естественным светом, а балкон станет отличным местом для утреннего кофе с видом на реку.</p><p>ЖК Омега3 предлагает развитую инфраструктуру: детские и спортивные площадки, зоны отдыха, гостевую парковку и системы видеонаблюдения для безопасности жителей. Близость к центральному автовокзалу, школе и гипермаркету делает этот вариант особенно удобным для активных горожан.</p>
                <button className="btnForm" onClick={() => {setFullTag(null)}}>Купить</button>
            </div>)}
            {typeof fullscreenTag === 'string' && fullscreenTag.startsWith('http') && (<div className="fullscreen-over" onClick={() => setFullTag(null)}>
                    <img src={fullscreenTag} alt="fullscreen" className="fullscreen-img"/>
                </div>)}
        </div>
    );
}

export default App;

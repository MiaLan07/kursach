
export default function HomesPage({ refOffers, fullscreenTag, setFullTag, images }) {


    return (
        <div className="homes" ref={refOffers}>
            <h2>Квартиры в продаже</h2>
            <div className="offers">
                <div className="offer" id="first">
                    <h3>Евро-2шка</h3>
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
                    <p>Евро-двушка в ЖК &laquo;Омега3&raquo; — это современное и функциональное жилье, идеально подходящее для комфортной жизни. Квартира сочетает просторную гостиную с кухонной зоной, отдельную спальню, современную ванную комнату и балкон с видом на реку Салгир.</p>
                    <button className="btnForm" onClick={() => setFullTag('first')}>Подробнее</button>
                </div>
                <div className="offer" id="second">
                    <h3>3-х комнатная квартира</h3>
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
                    <p>Эта уютная и просторная квартира расположена в престижном Киевском районе, который славится удобной инфраструктурой и комфортной городской средой. Киевский район — это идеальное место для комфортной жизни, где сочетаются удобство, безопасность и развитая инфраструктура.</p>
                    <button className="btnForm" onClick={() => setFullTag('second')}>Подробнее</button>
                </div>
                <div className="offer" id="third">
                    <h3>Студия</h3>
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
                    <p>Студия в ЖК &laquo;Омега3&raquo; — это компактное и уютное жилье, идеально подходящее для молодых специалистов, студентов или тех, кто ценит минимализм и функциональность. Квартира объединяет гостиную с кухонной зоной, современную ванную комнату и балкон с видом на реку Салгир.</p>
                    <button className="btnForm" onClick={() => setFullTag('third')}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}
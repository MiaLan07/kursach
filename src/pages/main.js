
export default function MainPage({ targRefMain }) {
    
    return (
        <div className="main" ref={targRefMain}>
            <button className="btnForm">Купить квартиру</button>
            <p>Жильё, готовое для жизни, рядом с работой и всей необходимой структурой</p>
            <h1 className="compName">Ваш комфорт в каждой детали</h1>
        </div>
    )
}
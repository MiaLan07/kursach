import { useState } from "react";
import './carousel.css';


export default function Carousel({ images }) {
    const [selectedImg, setSelectedImg] = useState(null)
    
    return (
        <div className="carousel-cont">
            <div className="carousel">
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`Фото ${i + 1}`} onClick={() => setSelectedImg(img)} className="carousel-img"/>
                ))}
            </div>

            {selectedImg && (
                <div className="fullscreen-over" onClick={() => setSelectedImg(null)}>
                    <img src={selectedImg} alt="fullscreen" className="fullscreen-img"/>
                </div>
            )}
        </div>
    )
}
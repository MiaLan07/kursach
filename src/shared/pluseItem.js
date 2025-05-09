
export default function PluseItem ({ pluse, togglePluse, index, activePluse, inWidth }) {

    return (
    <li onClick={ () => {if(inWidth <= 768) togglePluse(index)}}>
        {pluse.name}
        {((inWidth <= 768 && activePluse === index) || inWidth > 768) && (<p>{pluse.opis}</p>)}
    </li>
)}
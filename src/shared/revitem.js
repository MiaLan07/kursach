
export default function RevItem ({ rev, toggleRev, index, activeRev }) {

    return (
    <div className="rev" onClick={() => toggleRev(index)}>
        <h3>{rev.title}</h3>
        {activeRev === index && (
            <div>
                <p className="person">{rev.person}</p>
                <p className="service">{rev.service}</p>
                <p>{rev.text}</p>
            </div>
        )}
    </div>
)}
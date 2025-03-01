import './ListPositions.css';

function ListPositions({ text, numb, tools=[] }) {
    const result = (numb / 5) * 16.5;

    return (
        <>
            <div className={`view`}>
                <div className='line'>
                    <div className='text'>
                        <p>{text}</p>
                    </div>
                    <div className='avali'>
                        <div className="rating-container">
                            <div className="stars-green" style={{ width: `${result}vw` }}>★★★★★</div>
                            <p>★★★★★</p>
                        </div>
                    </div>
                </div>
                <div className='descrip'>
                    <p>tools and technology</p>
                    <div className='tools'>
                        {tools.map((item, index) => (
                            <li key={index}>
                                <p>{item.text}</p>
                                <img src={item.img} />
                            </li>
                        ))}
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ListPositions;

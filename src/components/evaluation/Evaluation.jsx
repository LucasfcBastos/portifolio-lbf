import Link from '../Link';

import './Evaluation.css'

function Evaluation({text, url, numb, avali}) {

    const result = (numb / 5) * 100;    

    return (
        <>
            <div className='camp_evaluation'>
                <p onClick={() => Link(url)} className='url'>{text ? text : "origin"}</p>
                <div className="rating-container">
                    <div className="stars-green" style={{ width: `${result}%` }}>★★★★★</div>
                    <p>
                        ★★★★★
                    </p>
                </div>
                <p className='description'>Rating: {numb} { avali ? `| ${avali} REVIEWS` : `` }</p>
            </div>
        </>
    )
}
  
export default Evaluation
import Wall from '../img/wall.png'
import Monster from '../img/monster.png'
import Fighter from '../img/fighter.png'

import './ImgPixel.css'

function ImgPixel() {
    return (
        <>
            <div className='camp_art'>
                <div className='background'></div>
                <img className='Wall' src={Wall}></img>
                <img className='Nidere' src={Monster}></img>
                <img className='Fighter' src={Fighter}></img>
            </div>
        </>
    )
}

export default ImgPixel
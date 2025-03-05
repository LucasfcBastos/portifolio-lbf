import './SouthAnimation.css'

import Arm from '../svg/arm.svg'
import Body from '../svg/body.svg'
import Face from '../svg/face.svg'

import Legs from '../svg/legs.svg'
import Torso from '../svg/torso.svg'
import Lhand from '../svg/left_hand.svg'
import Rhand from '../svg/right_hand.svg'

function SouthAnimation() {
    return (
        <>
            <div className='wave'>
                <img className='arm' src={Arm}></img>
                <img className='body' src={Body}></img>
                <img className='face' src={Face}></img>
            </div>
            <div className='dance'>
                <img className='legs' src={Legs}></img>
                <img className='torso' src={Torso}></img>
                <img className='lhand' src={Lhand}></img>
                <img className='rhand' src={Rhand}></img>
                <img className='face' src={Face}></img>
            </div>
        </>
    )
}
  
export default SouthAnimation
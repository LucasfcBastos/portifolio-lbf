import './SouthAnimation.css'

import Arm from '../svg/arm.svg'
import Body from '../svg/body.svg'
import Face from '../svg/face.svg'

function SouthAnimation() {
    return (
        <div className='wave'>
            <img className='arm' src={Arm}></img>
            <img className='body' src={Body}></img>
            <img className='face' src={Face}></img>
        </div>
    )
}
  
export default SouthAnimation
import Link from '../Link'
import './InstButton.css'

function InstButton({img, origem, name, url}) {
    return (
        <div className='camp_inst'>
            <p>{origem ? origem : 'origem project'}</p>
            <p className='margin'>{name ? name : 'name project'}</p>
            <img onClick={() => Link(url)} src={img}></img>
        </div>
    )
}
  
export default InstButton
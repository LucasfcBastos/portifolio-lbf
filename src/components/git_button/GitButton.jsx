import Link from '../Link'
import './GitButton.css'

function GitButton({img, name, url}) {
    return (
        <div onClick={() => Link(url)} className='git'>
            <img src={img}></img>
            <p>{name ? name : 'name project'}</p>
        </div>
    )
}
  
export default GitButton
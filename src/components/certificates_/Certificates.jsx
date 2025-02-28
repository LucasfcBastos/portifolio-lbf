import Link from '../Link'
import './Certificates.css'

function Certificates({img, link, type, data, url}) {
    return (
        <div className='camp_cert'>
            <img onClick={() => Link(url)} src={img}></img>
            <div className='text'>
                <p className='margin visible'>platform origin: www.{link}</p>
                <p className='margin'>certification: {type}</p>
                <p>granted data: {data}</p>
                <p>valid till: never expires</p>
            </div>
        </div>
    )
}
  
export default Certificates
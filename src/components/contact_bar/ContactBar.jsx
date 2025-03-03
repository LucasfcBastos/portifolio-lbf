import Link from '../Link'
import './ContactBar.css'

function ContactBar({img, text, url}) {
    return (
        <div onClick={() => Link(url)} className='button_contact'>
            <div className='content'>
                <img src={img}/>
                <p style={{ marginLeft: text ? '2vw' : '0vw' }}>{text}</p>
            </div>
            <div className='mouse'>
            </div>
        </div>
    )
}
  
export default ContactBar
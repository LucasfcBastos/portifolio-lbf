import './BackgroundAnimation.css'

function BackgroundAnimation() {
    return (
        <div className='Background'>
            <span style={{ "--i": 25, "--d": "0s" }}></span>
            <span style={{ "--i": 25, "--d": "-150s"}}></span>
        </div>
    )
}
  
export default BackgroundAnimation
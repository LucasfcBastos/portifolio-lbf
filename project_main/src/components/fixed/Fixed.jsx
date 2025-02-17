import './Fixed.css'
import Icon from '../svg/then.svg'
import Config from '../svg/config.svg'

function App() {
    return (
        <>
            <div class="fixed-top">
                <img src={Icon} alt="logo_lbf"></img>
            </div>
            <div class="menu-list">
                <ul>
                    <li>
                        <svg width="30" height="30">
                            <circle cx="15" cy="15" r="7.5" stroke="white" stroke-width="3" fill="white">
                                <a></a>
                            </circle>
                        </svg>
                    </li>
                    <li>
                        <svg width="30" height="30">
                            <circle cx="15" cy="15" r="7.5" stroke="white" stroke-width="3" fill="transparent">
                                <a></a>
                            </circle>
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="button-config">
                <div>
                    <button className='menu'>
                        <img src={Config}></img>
                    </button>
                </div>
                <div>
                    <button className='config'>
                        <img src={Config}></img>
                    </button>
                </div>
            </div>
        </>
    )
}
  
export default App
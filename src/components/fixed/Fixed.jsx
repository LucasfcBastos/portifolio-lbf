import { useState } from "react";
import './Fixed.css'
import Icon from '../svg/logo.svg'

function Fixed() {
    const [selected, setSelected] = useState("#main");

    const items = [
        { id: "#main", label: "Main" },
        { id: "#about", label: "About" },
        { id: "#traineng", label: "Traineng" },
        { id: "#courses", label: "Courses" },
        { id: "#projects", label: "Projects" },
        { id: "#knowledge", label: "Knowledge" },
    ];

    return (
        <>
            <div class="fixed-top">
                <img src={Icon} alt="logo_lbf"></img>
            </div>
            <div class="menu-list">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                        <a href={item.id} onClick={() => setSelected(item.id)}>
                            <svg width="20" height="20">
                            <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="3" fill={selected === item.id ? "white" : "transparent"}/>
                            </svg>
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="button-config">
                <div>
                    <button className='menu'>
                        <img src="https://cdn-icons-png.flaticon.com/512/4856/4856386.png"></img>
                    </button>
                </div>
                <div>
                    <button className='config'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170584.png"></img>
                    </button>
                </div>
            </div>
        </>
    )
}
  
export default Fixed
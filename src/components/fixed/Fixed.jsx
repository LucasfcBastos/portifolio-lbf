import { useState, useEffect } from "react";
import './Fixed.css';
import Icon from '../svg/logo.svg';

function Fixed() {
    const [selected, setSelected] = useState("#main");
    const [menuVisible, setMenuVisible] = useState(false);

    const items = [
        { id: "#main", label: "Main" },
        { id: "#about", label: "About" },
        { id: "#traineng", label: "Traineng" },
        { id: "#courses", label: "Courses" },
        { id: "#projects", label: "Projects" },
        { id: "#knowledge", label: "Knowledge" },
        { id: "#contact", label: "Contact" },
    ];

    // Bloqueia o scroll do body quando o menu está visível
    useEffect(() => {
        if (menuVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // Cleanup para evitar bugs
        };
    }, [menuVisible]);

    return (
        <>
            <div className="fixed-top">
                <img src={Icon} alt="logo_lbf" />
            </div>

            <div className="menu-list">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <a href={item.id} onClick={() => setSelected(item.id)}>
                                <svg width="20" height="20">
                                    <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="3" fill={selected === item.id ? "white" : "transparent"} />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="button-config">
                <div>
                    <button className='menu' onClick={() => setMenuVisible(true)}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4856/4856386.png" alt="menu icon" />
                    </button>
                </div>
                <div>
                    <button className='config'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170584.png" alt="config icon" />
                    </button>
                </div>
            </div>

            <div className={`menu-id ${menuVisible ? "visible" : "hidden"}`}>
                <div className="close" onClick={() => setMenuVisible(false)}>
                    <img src="https://cdn-icons-png.flaticon.com/512/11450/11450177.png" alt="close icon" />
                </div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <a href={item.id} onClick={() => {
                                setSelected(item.id);
                                setMenuVisible(false);
                            }} style={{ borderBottom: selected === item.id ? "2vw solid white" : "0px" }}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Fixed;
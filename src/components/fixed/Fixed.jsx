import { useState } from "react";
import './Fixed.css';
import Icon from '../svg/logo.svg';

function Fixed() {
    const [selected, setSelected] = useState("#main");

    const items = [
        { id: "#main", label: "Main" },
        { id: "#about", label: "About" },
        { id: "#traineng", label: "Traineng" },
        { id: "#courses", label: "Courses" },
        { id: "#projects", label: "Projects" },
        { id: "#knowledge", label: "Knowledge" },
        { id: "#contact", label: "Contact" },
    ];

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
                                    <circle cx="10" cy="10" r="7.5" stroke="var(--ColorImage)" strokeWidth="3" fill={selected === item.id ? "var(--ColorImage)" : "transparent"} />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Fixed;
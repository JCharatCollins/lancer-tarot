import { useState } from "react";
import style from './page.module.css'
import Image from "next/image";


export default function Sidebar() {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    function SidebarItem(text: string, imagePath: string, imageAltText: string) {
        return (
            <div className={style.sidebarItem} onMouseOver={() => setSideBarOpen(true)} onClick={() => setSideBarOpen(!sidebarOpen)}>
                <Image
                    src={imagePath}
                    alt={imageAltText}
                    height={30}
                    width={30}
                />
                <h2 style={sidebarOpen ? { display: 'block'} : {display: 'none'}}>
                    {text}
                </h2>
            </div>
        );
    }

    return (
        <nav className={style.sidebar} style={{ width: sidebarOpen === false ? 70 : 300 }} onMouseLeave={() => setSideBarOpen(false)}>
            <div>
                {SidebarItem('Major Arcana', '', '')}
                {SidebarItem('', '/menu.svg', 'Menu')}
                {SidebarItem('Get A Reading', '', '')}
            </div>
        </nav>
    );
}
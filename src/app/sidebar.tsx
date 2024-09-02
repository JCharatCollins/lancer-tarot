'use client'

import { useState } from "react";
import style from './page.module.css'
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Sidebar() {
    const [sidebarOpen, setSideBarOpen] = useState(false);

    function SidebarItem(text: string, imagePath: string, imageAltText: string, link: string) {
        const path = usePathname()
        const isCurrent = path !== link

        return (
            <div
                style={sidebarOpen ? 
                    {justifyContent: 'left', paddingLeft: '15px'} :
                    {justifyContent: 'center'}}
                className={style.sidebarItem}
                onMouseOver={() => setSideBarOpen(true)}
            >
                <a href={link}>
                    <Image
                        style={isCurrent ? { filter: 'invert(0)'} : {}}
                        src={imagePath}
                        alt={imageAltText}
                        height={40}
                        width={40}
                    />
                </a>
                {isCurrent ?
                <h2 style={sidebarOpen ? { display: 'block'} : {display: 'none'}}>
                    <a href={link}>
                        {text}
                    </a>
                </h2>
                : 
                <h2 style={sidebarOpen ? { display: 'block', filter: 'invert(0)'} : {display: 'none', filter: 'invert(0)'}}>
                    {text}
                </h2>}
            </div>
        );
    }

    return (
        <nav className={style.sidebar} style={{ width: sidebarOpen === false ? 70 : 300 }} onMouseLeave={() => setSideBarOpen(false)}>
            {SidebarItem('Major Arcana', '/tarot.png', 'Major Arcana', '')}
            {SidebarItem('Home', '/spellbook.png', 'Home', '/')}
            {SidebarItem('Get A Reading', '/fortuneteller.png', 'Get a reading', '/reading')}
        </nav>
    );
}
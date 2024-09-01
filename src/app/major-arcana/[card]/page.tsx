'use client'

import FrameTitle from "../FrameTitle";
import styles from '../page.module.css'
import Image from 'next/image'
import PilotBlock from "../PilotBlock";

export default function Page({ params }: { params: { card: string } }) {
    return (
        <div className={styles.main}>
            <div className={styles.maContainer}>
                <FrameTitle title={params.card.toUpperCase()} />
                <PilotBlock callsign={params.card} />
            </div>
        </div>
    )
}
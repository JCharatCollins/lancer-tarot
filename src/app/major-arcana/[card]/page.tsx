'use client'

import FrameTitle from "../FrameTitle";
import styles from '../page.module.css'
import Image from 'next/image'
import PilotBlock from "../PilotBlock";
import { useEffect, useState } from "react";
import MechBlock from "../MechBlock";

export default function Page({ params }: { params: { card: string } }) {
    const [pilotData, setPilotData] = useState<PilotData | undefined>(undefined)
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;  
        fetch('../pilotjson/' + params.card + '.json', {
            signal: signal
        })
        .then((response) => response.json())
        .then((response) => {
            setPilotData(response)
        })
        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('aborted pilotdata request');
            }
        });
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.maContainer}>
                <FrameTitle title={params.card.toUpperCase()} />
                {pilotData ? 
                <>
                    <PilotBlock callsign={params.card} pilotData={pilotData} />
                    <MechBlock mechData={pilotData.mech} />
                </> :
                <>
                </>}
            </div>
        </div>
    )
}
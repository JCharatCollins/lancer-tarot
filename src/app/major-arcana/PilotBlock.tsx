import { useEffect, useState } from 'react';
import styles from './page.module.css'

export default function PilotBlock({ callsign } : { callsign: string }) {
    const [pilotData, setPilotData] = useState<PilotData | undefined>(undefined)
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
      
         fetch('../pilotjson/' + callsign + '.json', {
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
      }, [callsign]);
    
    return (
        <div className={styles.pilotBlock}>
            <h3>
                {pilotData?.name}
            </h3>
        </div>
    );

}
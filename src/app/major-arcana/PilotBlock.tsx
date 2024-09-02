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
            <div>
              <h1>
                {pilotData?.name}
              </h1>
              <h3 style={{display: 'inline'}}>
                {'SHARE CODE: ' + pilotData?.share_code}
              </h3>
            </div>
            <div className={styles.quoteHeader}>
              {pilotData?.mech.quote.split('\n').map((substring) => {
                return (
                  <h2 key={substring} className={styles.quoteHeader}>
                    {substring}
                  </h2>
                );
              })}
            </div>
            <div className={styles.pilotAttributes}>
              <div className={styles.panel}>
                <h2>
                  Skill Triggers
                </h2>
                {pilotData ? pilotData.skill_triggers.map((value) => {
                  return (
                    <div className={styles.panelText} key={value.name}>
                      <p>{value.name + ' (+' + value.level + ')'}</p>
                    </div>
                  );
                }) :
                null}
              </div>
              <div className=''></div>
              <div className={styles.panel}>
                <h2>
                  Talents
                </h2>
                <div className={styles.panelText}>
                  {pilotData ? pilotData.talents.map((value) => {
                    return (
                        <p key={value.name} style={{
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                          paddingTop: '20px'
                        }}>
                          {value.name.toUpperCase() + ' ' + value.level}
                        </p>
                    );
                  }) :
                  null}
                  <a href='https://compcon.app/#/compendium/talents'>
                    <p className={styles.compConLink}>
                      VIEW TALENT INFORMATION
                    </p>
                  </a>
                </div>
              </div>
              <div className=''></div>
            </div>
        </div>
    );

}
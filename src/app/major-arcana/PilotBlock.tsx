import styles from './page.module.css'

export default function PilotBlock({ callsign, pilotData } : { callsign: string, pilotData: PilotData }) {
    
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
          <div className={styles.licensesContainer}>
            {pilotData?.licenses.map((value) => {
              return (
                <div key={value.name} className={styles.license}>
                  <h3>
                    {value.name + ' ' + value.level}
                  </h3>
                </div>
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
          </div>
          <div className={styles.pilotGear}>
            <h2>
              PILOT EQUIPMENT
            </h2>
            <div className={styles.pilotEquipment}>
              {pilotData?.gear.slice(0,3).map((value) => {
                return (
                  <div key={value} className={styles.equipmentItem}>
                    <p>
                      {value}
                    </p>
                  </div> 
                );
              })}
            </div>
            <div className={styles.pilotItems}>
              {pilotData?.gear.slice(3).map((value) => {
                return (
                  <div key={value} className={styles.equipmentItem}>
                    <p>
                      {value}
                    </p>
                  </div> 
                );
              })}
            </div>
          </div>
          <div className={styles.coreBonusContainer}>
            <h2>
              CORE BONUS
            </h2>
            <div className={styles.coreBonus}>
              <h3>
                {pilotData?.core_bonuses[0]}
              </h3>
            </div>
          </div>
        </div>
    );

}
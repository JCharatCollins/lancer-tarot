import styles from './page.module.css'


export default function MechBlock({ mechData } : {mechData: MechData}) {
    
    function MechStatBlock(name: string, value: string | number) {
        return (
            <div className={styles.mechStatBlock}>
                <h3>
                    {name}
                </h3>
                <div className={styles.mechStatBlockText}>
                    <p>
                        {value}
                    </p>
                </div>
            </div>
        );
    }
    
    return (
        <div className={styles.mechBlock}>
            <div className={styles.mechTitle}>
                <h2>
                    {mechData.frame}
                </h2>
                <h1>
                    <span>
                        {mechData.name}
                    </span>
                    <span style={{ float: 'right' }}>
                        <span style={{ fontSize: '2rem'}}>
                            {'SIZE: '}
                        </span>
                        <span>
                            {mechData.size}
                        </span>
                    </span>
                </h1>
            </div>
            <div className={styles.haseBlock}>
                <h3>
                    {'HULL: ' + mechData.pilot_stats[0]}
                </h3>
                <h3>
                    {'AGILITY: ' + mechData.pilot_stats[1]}
                </h3>
                <h3>
                    {'SYSTEMS: ' + mechData.pilot_stats[2]}
                </h3>
                <h3>
                    {'ENGINEERING: ' + mechData.pilot_stats[3]}
                </h3>
            </div>
            <div className={styles.mechStats}>
                <div className={styles.mechStatsRow}>
                    {MechStatBlock('STRUCTURE', mechData.mech_stats.structure)}
                    {MechStatBlock('HP', mechData.mech_stats.hp)}
                    {MechStatBlock('STRESS', mechData.mech_stats.stress)}
                    {MechStatBlock('HEAT CAP', mechData.mech_stats.heat_cap)}
                </div>
                <div className={styles.mechStatsRow}>
                    {MechStatBlock('ARMOR', mechData.mech_stats.armor)}
                    {MechStatBlock('REPAIR CAP', mechData.mech_stats.repair_cap)}
                    {MechStatBlock('E-DEFENSE', mechData.mech_stats.edefense)}
                    {MechStatBlock('SENSORS', mechData.mech_stats.sensors)}
                </div>
                <div className={styles.mechStatsRow}>
                    {MechStatBlock('ATTACK BONUS', mechData.mech_stats.attack_bonus)}
                    {MechStatBlock('TECH ATTACK', mechData.mech_stats.tech_attack_bonus)}
                    {MechStatBlock('EVASION', mechData.mech_stats.evasion)}
                    {MechStatBlock('SPEED', mechData.mech_stats.speed)}
                </div>
                <div className={styles.mechStatsRow}>
                    {MechStatBlock('LTD. SYS. BONUS', mechData.mech_stats.limited_systems_bonus)}
                    {MechStatBlock('SAVE DC', mechData.mech_stats.save_dc)}
                </div>
            </div>
            <div className={styles.coreSystem}>
                <h3 style={{fontSize: '2rem', textShadow: '0 0 0'}}>
                    CORE SYSTEM:
                </h3>
                <h3>
                    {mechData.core_system}
                </h3>
            </div>
        </div>
    );
}
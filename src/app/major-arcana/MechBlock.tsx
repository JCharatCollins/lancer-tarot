import styles from './page.module.css'


export default function MechBlock({ mechData } : {mechData: MechData}) {
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
        </div>
    );
}
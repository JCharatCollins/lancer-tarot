import styles from './page.module.css'
import Image from 'next/image'

// :(
const prefixes = [
    'TOWER',
    'HERMIT',
    'HIEROPHANT',
    'SUN',
    'MOON',
    'EMPRESS',
    'EMPEROR',
    'WHEEL-OF-FORTUNE',
    'HANGED-MAN',
    'HIGH-PRIESTESS',
    'FOOL',
    'MAGICIAN',
    'CHARIOT',
    'DEVIL'
]

export default function FrameTitle({title} : {title: string}) {
    return (
        <div className={styles.frameTitle}>
            <h2>
                {prefixes.indexOf(title) === -1 ?
                title.replace('-', ' ') :
                'THE ' + title.replaceAll('-', ' ')}
            </h2>
        </div>
    );
}
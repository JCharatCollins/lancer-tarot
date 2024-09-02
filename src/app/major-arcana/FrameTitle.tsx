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
    'FOOL'
]

export default function FrameTitle({title} : {title: string}) {
    return (

        <div className={styles.frameTitle}>
            <div className={styles.frameTarotText}>
                <Image
                    className={styles.cardImage}
                    src={'/tarotcards/' + title + '.jpg'}
                    alt={title}
                    height={1080}
                    width={625}
                    priority
                />
                <h2>
                    {prefixes.indexOf(title) === -1 ?
                    title.replace('-', ' ') :
                    'THE ' + title.replace('-', ' ')}
                </h2>
            </div>
        </div>
    );
}
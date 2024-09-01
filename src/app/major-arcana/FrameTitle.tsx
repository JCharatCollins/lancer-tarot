import styles from './page.module.css'
import Image from 'next/image'

// :(
const prefixes = ['HERMIT']

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
                />
                <h2>
                    {prefixes.indexOf(title) === -1 ?
                    title :
                    'THE ' + title}
                </h2>
            </div>
        </div>
    );
}
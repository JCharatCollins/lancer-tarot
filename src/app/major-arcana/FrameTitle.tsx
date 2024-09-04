import styles from './page.module.css'
import prefixes from '../cardprefixes'

export default function FrameTitle({title} : {title: string}) {
    return (
        <div className={styles.frameTitle}>
            <h1>
                {prefixes.indexOf(title) === -1 ?
                title.replaceAll('-', ' ') :
                'THE ' + title.replaceAll('-', ' ')}
            </h1>
        </div>
    );
}
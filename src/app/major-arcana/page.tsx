import prefixes from '../cardprefixes';
import styles from './page.module.css'
import Image from 'next/image';

const majorArcana = [
    'fool',
    'magician',
    'high-priestess',
    'empress',
    'emperor',
    'hierophant',
    'Lovers',
    'chariot',
    'strength',
    'hermit',
    'wheel-of-fortune',
    'justice',
    'hanged-man',
    'death',
    'temperance',
    'devil',
    'tower',
    'star',
    'moon',
    'sun',
    'judgement',
    'world'
]

export default function Page() {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>
                    The leaders of the Shuffle Alliance...
                </h3>
                <h1>
                    THE MAJOR ARCANA
                </h1>
            </div>
            <div className={styles.maListContainer}>
                {majorArcana.map((value) => {
                    return (
                        <a key={value} href={'/major-arcana/' + value} style={{ width: '100%'}}>
                            <div 
                            className={styles.maListItem} 
                            style={{backgroundImage: 'url("/tarotcards/' + value.toUpperCase() + '.jpg")'}}>
                                <h2>
                                    {prefixes.indexOf(value.toUpperCase()) === -1 ?
                                    value.toUpperCase().replaceAll('-', ' ') :
                                    'THE ' + value.toUpperCase().replaceAll('-', ' ')}
                                </h2>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    )
}
'use client'

import styles from './page.module.css'
import Image from 'next/image'
import { useState } from 'react';

const majorArcana = [
    'fool',
    'magician',
    'high_priestess',
    'empress',
    'emperor',
    'hierophant',
    'Lovers',
    'chariot',
    'strength',
    'hermit',
    'wheel_of_fortune',
    'justice',
    'hanged_man',
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

function getRandomSubarray(arr : any[], size: number) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

export default function Page() {

    const [cards, setCards] = useState<string[]>([])

    function getReading () {
        const chosen = getRandomSubarray(majorArcana, 3)
        setCards(chosen)
        console.log(chosen)
        console.log(cards)
    }

    function flippableCard (cardName : string) {
        return (
            <div className={styles.cardOptions}>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <Image
                                src={'/tarotcards/cardback.jpg'}
                                alt={'Card back'}
                                fill
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <Image
                                src={'/tarotcards/' + cardName.toUpperCase() + '.jpg'}
                                alt={cardName}
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>
                    In order to join the Shuffle Alliance, you must first...
                </h3>
                <h1>
                    LEARN YOUR FATE
                </h1>
                <h2>
                    Proceed below...
                </h2>
            </div>
            <div className={styles.readingImage}>
                <Image
                    src={'/fortuneteller.png'}
                    alt={'Fortune Teller'}
                    height={80}
                    width={80}
                />
            </div>
            <div className={styles.panel}>
                <h2>
                    THE READING
                </h2>
                <div className={styles.panelText}>
                    <p>
                        The number of cards dealt in a Tarot reading is referred to as the number of cards in the spread.
                        Here, we present you with a three-card spread.
                    </p>
                    <p>
                        These represent the three roads ahead of you as a member of the Shuffle Alliance.
                    </p>
                </div>
            </div>
            <div className={styles.threePaths}>
                <div className={styles.path}>
                    <h3>
                        The First
                    </h3>
                    <h2>
                        The High Road
                    </h2>
                    <div className={styles.pathText}>
                        <h4>
                            Go forth, and fear no darkness.
                        </h4>
                        <p>
                            The high road favors those true to themselves.
                            Sometimes the path you need to follow is the one right in front of you.
                            Sometimes the simplest answer is the best one.
                            The sword and pen alike cut best when used without doubt or hesitation.
                        </p>
                        <p style={{height: '200px'}}>
                            May your cuts be swift, your thrusts bold, and your story neverending.
                        </p>
                    </div>
                </div>
                <div className={styles.path}>
                    <h3>
                        The Second
                    </h3>
                    <h2>
                        The Low Road
                    </h2>
                    <div className={styles.pathText}>
                        <h4>
                            Where many fear to tread.
                        </h4>
                        <p>
                            To walk the low road is to sink into the mud, to embrace the doubt, the complexity of it all,
                            to accept there are no &quot;right&quot; answers, that what you seek lies both within your reach
                            and outside your sight.
                            Open your inner eye. Recognize that the doubt comes from within, that the only things worth knowing
                            are those that you can derive, and that fear, above all else, is the mind-killer.
                        </p>
                        <p>
                            May your thoughts be quick, your reason sharp, and your learning neverending.
                        </p>
                    </div>
                </div>
                <div className={styles.path}>
                    <h3>
                        The Third
                    </h3>
                    <h2>
                        The Road Less Traveled
                    </h2>
                    <div className={styles.pathText}>
                        <h4>
                            ...and it has made all the difference.
                        </h4>
                        <p>
                            The road less traveled will lead you to strange and unfamiliar places. To make the unfamiliar
                            familiar, the strange known and undaunting; this is your quest. Find solace in undiscovered
                            country, and return from where nobody has returned before.
                        </p>
                        <p>
                            May you forever sail upon the winds of change, and may you forever rush in where others fear to tread.
                        </p>
                    </div>
                </div>
            </div>
            <div style={cards.length === 0 ? {} : {display: 'none'}}className={styles.getReadingContainer}>
                <button
                    className={styles.getReadingButton}
                    onClick={() => getReading()}
                >
                    <Image
                        src={'/fortuneteller.png'}
                        alt={'Fortune Teller'}
                        height={40}
                        width={40}
                    />
                    <h3>
                        GET READING
                    </h3>
                </button>
            </div>
            {cards.length > 0 ?
            <div className={styles.cardContainer}>
                {flippableCard(cards[0])}
                {flippableCard(cards[1])}
                {flippableCard(cards[2])}
            </div>
            : null}
        </div>
    );
}
import Link from 'next/link'
import styles from '@/styles/useEffectOne.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image'
export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number)
        setNumber(number + 1)
    })
    return (
        <>
            <main className={styles.main}>
            <Link className={styles.link} href="/">Home</Link>
            <div className={styles.welcomePage}>
                 Welcome to the Infinite Counter 
            </div>
            <div className={styles.useEffect1}>
                useEffectOne
            </div>
            <div className={styles.numberValue}>
                {number}
            </div>

            <Image className={styles.gradHat}
                    src={"/icons/graduation-hat.png"}
                    alt={"/icons/graduation-hat.png"}
                    width={50}
                    height={50}
                />

                <Image className={styles.menuBar}
                    src={"/icons/menu-icon.png"}
                    alt={"/icons/menu-icon.png"}
                    width={50}
                    height={40}
                />
            </main>
        </>
    )
}
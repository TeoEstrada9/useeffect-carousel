import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '@/styles/useEffectThree.module.css'
import Image from 'next/image'
export default function UseEffectThree() {
    const [number, setNumber] = useState(0)
    const [value, setValue] = useState(-10); 
    

    useEffect (() => {
        setValue(value + 10)
    }, [number])
    
    return(
        <>
            <main className={styles.main}>
            <Link className={styles.homeLink3} href="/">Home</Link>
            <div>
                <button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me</button>
            </div>
            <div className={styles.title3}>
                useEffectThree
            </div>
            <div className={styles.value}>
                {value}
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
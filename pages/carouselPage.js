import Link from 'next/link'
import Carousel from "@/components/carousel"
import styles from '@/styles/CarouselPage.module.css'
export default function CarouselPage() {
    return(
        <>
            <main className={styles.main}>
            <Link className={styles.titleLink} href="/">Home</Link>
            <Carousel/>

            <div className={styles.schoolTitle}>
                Our School 
            </div>
            <div className={styles.ourSchool}>
                Our School is one of the top schools in British Coloumbia 
            </div>
            <button className={styles.joinButton}>Join Today!</button>
            </main>
        </>
    )
}


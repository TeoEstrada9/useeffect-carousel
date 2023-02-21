import Image from "next/image"
import styles from '@/components/carousel/Carousel.module.css'
import { useState } from "react"
export default function Carousel() {
    
    const [img, setImg] = useState(0); 
    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img -1); 

            if(img == 0) {
                setImg(5);    
            }
            console.log(img);    
        } else if(change == "forward") {
            setImg(img + 1); 
           
            if(img == 5) {
                setImg(0)
            }
            console.log(img)

        }
    }
    return (
        <>
            <div className={styles.images} style={{
                            backgroundImage:"url(/carousel-images/" + img + ".jpg)",
                            backgroundSize: 'cover', 
                            backgroundRepeat: "no-repeat", 
                            width: 500, 
                            height: 300
            }}>
                <Image className={styles.leftArrow}
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={40}
                    height={40}
                    onClick={() => changeImage("backward")}

                />

                <Image className={styles.rightArrow}
                    src={"/icons/rightArrow.png"}
                    alt={"icons/rightArrow.png"}
                    width={40}
                    height={40}
                    onClick={() => changeImage("forward")}
                />

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

            </div>
        </>
    )
}
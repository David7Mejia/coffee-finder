import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const Card = props => {
    return (
        <Link className={styles.cardLink} href={props.href}>
            <div className={styles.container}>
                <div className={styles.cardHeaderWrapepr}>
                    <h2 className={styles.cardHeader}>{props.name}</h2>
                    <div className={styles.cardImageWrapepr}>
                        <Image
                            className={styles.cardImage}
                            src={props.imgUrl}
                            width={260}
                            height={160}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;

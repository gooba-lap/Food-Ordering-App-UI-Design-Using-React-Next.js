import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <ul className={styles.listItem}>Homepage</ul>
                    <ul className={styles.listItem}>Product</ul>
                    <ul className={styles.listItem}>Menu</ul>
                    <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
                    <ul className={styles.listItem}>Homepage</ul>
                    <ul className={styles.listItem}>Homepage</ul>
                    <ul className={styles.listItem}>Homepage</ul>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30" height="30px" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

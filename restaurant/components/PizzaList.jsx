import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BASE PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu 
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetut adipiscing elit 
            </p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/> 
            </div>
        </div>
    )
}

export default PizzaList

import style from './style.module.css'
import Card from "../card/Card";

const Cards = ({list = [], addToBasket}) => {
    if (!list.length) {
        return <h3>Not found</h3>
    }
    return (
        <div className={style.cards}>
            {list.map(item => (
                <Card key={item.id} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
}
export default Cards
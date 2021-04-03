import style from './style.module.css'

const Basket = ({quantity = 0, handleBasketShow}) => {
    return (

        <div className={style.basket}  onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className={style.basket_quantity}>{quantity}</span> : null}
        </div>
    )
}


export default Basket
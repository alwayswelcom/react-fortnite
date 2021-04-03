import BasketItem from "./basket_item/BasketItem";
import './style.css'

const BasketList = ({
                        order = [],
                        handleBasketShow,
                        handleRemoveFromBasket,
                        incrementQuantity,
                        decrementQuantity
                    }) => {
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection basket_list">
            <li className="collection-item active grey  black-text basket-close " onClick={handleBasketShow}>Basket</li>
            {order.length ? order.map(item => (
                <BasketItem key={item.id}
                            {...item}
                            handleRemoveFromBasket={handleRemoveFromBasket}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                />
            )) : <li className="collection-item active grey  black-text">Basket empty</li>}
            <li className="collection-item active black white-text total">Total price:{totalPrice} $
                <button className="secondary-content grey btn-small">checkout</button>
            </li>

        </ul>
    )
}

export default BasketList
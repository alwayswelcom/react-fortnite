import './style.css'

const BasketItem = (props) => {
    const {id, name, price, quantity, handleRemoveFromBasket, incrementQuantity, decrementQuantity} = props
    return (
        <li className="collection-item transparent"
        >{name}
            <i className="material-icons basket-quantity" onClick={() => decrementQuantity(id)}>
                remove_circle_outline
            </i> x {quantity}{' '}
            <i className="material-icons basket-quantity" onClick={() => incrementQuantity(id)}>
                add_circle_outline
            </i>{' '}={price * quantity}
            <span className="secondary-content black-text">
                <i className="material-icons basket-delete" onClick={() => handleRemoveFromBasket(id)}>clear</i>
            </span>
        </li>
    )
}

export default BasketItem
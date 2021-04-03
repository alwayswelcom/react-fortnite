import './card.css'

const Card = (props) => {
    const {id, name, description, price, full_background, addToBasket} = props
    return (
        <div className="card" >
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <p>{description}</p>
                <div className="card-action">
                    <button className="btn waves-effect waves-light grey darken-1"
                            onClick={()=>addToBasket({id, name, price})}
                            name="action">buy
                    </button>
                    <span className='right' style={{fontSize: '1.6rem', fontWeight: '600'}}>{price} $</span>
                </div>
                <span className="card-title left" style={{fontWeight: '700'}}>{name}</span>
            </div>
        </div>
    )
}
export default Card




import React, {useState, useEffect} from 'react'
import {API_KEY, API_URL} from "../../api/api";
import Preloader from "../Preloader";
import Cards from "../cards/Cards";
import style from './style.module.css'
import Basket from "../basket/Basket";
import BasketList from "../basket_list/BasketList";
import Toast from "../toast/Toast";

const Main = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setIsBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
        //in here we find or include index
        if (itemIndex < 0) {
            //in here if we not find add new key quantity
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name)
    };

    const handleRemoveFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    const incrementQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1
                return {
                    ...el, quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decrementQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity - 1
                return {
                    ...el, quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('')
    }

//get list
    useEffect(() => {
        fetch(API_URL, {headers: {'Authorization': API_KEY}})
            .then(response => response.json())
            .then(data => {
                data.featured && setList(data.featured)
                setLoading(false)
            })
    }, [])

    console.log(list)
    return (
        <main className={style.main}>
            <Basket quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/> : <Cards list={list} addToBasket={addToBasket}/>}
            {isBasketShow && <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                handleRemoveFromBasket={handleRemoveFromBasket}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
            />}
            {
                alertName && <Toast name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export default Main
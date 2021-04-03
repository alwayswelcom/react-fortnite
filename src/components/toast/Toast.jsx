import {useEffect} from "react";
import './style.css'
const Toast = ({name = '', closeAlert}) => {
    useEffect(() => {
        const timer = setTimeout(closeAlert,3000)
        return ()=>{
            clearTimeout(timer)
        }
        //eslint-disable-next-line
    }, [name])


    return (
        <div id='toast-container'>
            <div className="toast">{name}added to basket</div>
        </div>
    )
}

export default Toast
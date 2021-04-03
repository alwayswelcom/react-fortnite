import style from './style.module.css'
import fortnite from '../../img/fortnite.png'

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper grey lighten-1">
                <a href="#!" className="brand-logo center">
                    <img
                        src={fortnite}
                        alt="logo" className={style.img}/>
                </a>
                <ul id="nav-mobile" className="right">
                    <li><a className="black-text" href="https://github.com/Artur515/react-fortnite-shop-trainee"
                           target="_blank"  rel="noreferrer" >
                        Repo
                    </a></li>
                </ul>
            </div>
        </nav>

    )
}


export default Header
import './Header.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router'

function Header() {
    return (
        <header  className="headerStyle">
            <div className='logo'>
             <img src={logo} alt="soundwavelogo" />
           <Link to={"/"}>Soundwave</Link>
         </div>
                <nav className='navbar-container'>
                    <Link to={"/discover"}>Discover</Link>
                    <Link to={"/join"}>Join</Link>
                </nav>
        </header>
  
    )
}

export default Header
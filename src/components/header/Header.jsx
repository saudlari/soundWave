import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'

function Header() {
    return (
        <div className="headerStyle">
        <header>
      
            <img src={logo} alt="soundwavelogo" />
           <Link to={"/"}>Soundwave</Link>
        
         <nav className='navbar-container'>
             <Link to={"/discover"}>Discover</Link>
             <Link to={"/join"}>Join</Link>

        </nav>
        </header>
    </div>
    )
    
}

export default Header
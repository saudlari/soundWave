import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className="headerStyle">
        <header>
            <img src={logo} alt="soundwavelogo" />
             <h2>Soundwave</h2>
             </header>
        <nav>
             <p>Discover</p>
             <p>Join</p>

        </nav>
       
    </div>
    )
    
}

export default Header
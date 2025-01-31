import { useNavigate } from "react-router";
import landingpage from "../../assets/landing-page-girl.png"
import "./Bodyhome.css"
import Button from "../button/Button"

function Bodyhome() {
  const navigate = useNavigate()
    return (
      <>
        <div className="bodyhome">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <img className="photogirl" src={landingpage} alt="photogirl" />
          <div className="bodytext">
            <h2>Feel The Music</h2>
            <p>Stream over 20 thousand songs with one click</p>
          <Button size="small" onClick={() => navigate("/join") } />
          </div>
          <div className="circle3"></div>
        </div>
      </>
    );
    
}

export default Bodyhome

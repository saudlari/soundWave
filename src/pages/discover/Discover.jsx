//import Header
import microphoneIcon from "../../assets/images/microphone.svg"
import albumIcon from "../../assets/images/albums.svg"
import moreIcon from "../../assets/images/more.svg"

import albumPhotos from "../../assets/images/covers.jpg";
import Footer from "../../components/footer/Footer";
import './Discover.css'

function Discover(){
    return(
        <>
        <div id="discover-page">
            <div id="discover-container">
                <h1>Discover new music</h1>
                <div class="icon-container">
                <img className="icon-button" alt="Microphone icon" src={microphoneIcon}/>
                <img className="icon-button" alt="Album icon" src={albumIcon}/>
                <img className="icon-button" alt="More icon" src={moreIcon}/>
            </div>
                <h4>By joining you can benefit by listening to the latest albums released.</h4>
        </div>
            <div id="image-container">
                <img id="album-photo" alt="Photo showing four album covers" src={albumPhotos}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Discover;

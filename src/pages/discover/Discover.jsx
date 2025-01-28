import albumPhotos from "../../assets/images/covers.jpg";
import Footer from "../../components/footer/Footer";
import Icons from "../../components/icons/Icons";
import './Discover.css'

import microphoneIcon from "../../../public/microphone.svg"
import albumIcon from "../../assets/images/albums.svg"
import moreIcon from "../../assets/images/more.svg"

function Discover (){
    return(
        <>
        <div className="discover-page">
            <div className="discover-container">
                <h1>Discover new music</h1>
                    <div className="icon-container">
                        <Icons src={microphoneIcon} alt="Microphone icon" />
                        <Icons src={albumIcon} alt="Album icon" />
                        <Icons src={moreIcon} alt="More icon" />
                    </div>
                <h4>By joining you can benefit by listening to the latest albums released.</h4>
            </div>
                <div className="image-container">
                    <img className="album-photo" alt="Photo showing four album covers" src={albumPhotos}/>
                </div>
        </div>
        <Footer />
        </>
        )
}

export default Discover

import albumPhotos from "../../assets/images/covers.jpg"
import Icons from "../../components/icons/Icons"
import microphoneIcon from "../../assets/images/microphone.svg"
import albumIcon from "../../assets/images/albums.svg"
import moreIcon from "../../assets/images/more.svg"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

import './Discover.css'


function Discover (){
    return(
        <>
        <Header />
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

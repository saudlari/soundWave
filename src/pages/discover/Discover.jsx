//import Header
import albumPhotos from "../../assets/covers.jpg";
import Footer from "../../components/footer/Footer";
import './Discover.css'

function Discover(){
    return(
        <>
        //Header
        <div id="discover-page">
            <div id="discover-container">
                <h1>Discover new music</h1>
                <div class="icon-container">
                <div class="icon-button"></div>
                <div class="icon-button"></div>
                <div class="icon-button"></div>
                {/* <Icon /> */}
                {/* <Icon /> */}
                {/* <Icon /> */}
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

//import Header
import albumPhotos from "../../assets/covers.jpg";
import Footer from "../../components/footer/Footer";
//import Footer

function Discover() {
  return (
    <>
      <h1>Discover new music</h1>
      {/* <Icon /> */}
      {/* <Icon /> */}
      {/* <Icon /> */}
      <h4>
        By joining you can benefit by listening to the latest albums released.
      </h4>
      <img alt="Photo showing four album covers" src={albumPhotos} />
      <Footer />
    </>
  );
}

export default Discover;

import './App.css';
import Navbar from './components/Navbar';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReview from './components/ProductReview';
import Videos from './components/Videos';
import Bannner from './components/Bannner';
import Footer from './components/Footer';
import NavBarOptions from './components/NavBarOptions';
import NavBarr from './components/NavBarr';





function App() {
  return (
    <Router>
      {/* <PreNavbar /> */}

      {/* <Navbar /> */}

      <NavBarr />
      
      
      <Routes>

      <Route excat path='/miphones' element={<NavBarOptions miPhones={data.miPhones}  />} />
      <Route excat path='/redmiphones' element={<NavBarOptions  redmiPhones={data.redmiPhones} />} />
      <Route excat path='/laptops' element={<NavBarOptions  laptop={data.laptop} />} />
      <Route excat path='/tv' element={<NavBarOptions  tv={data.tv} />} />
      <Route excat path='/audio' element={<NavBarOptions  audio={data.audio} />} />
      <Route excat path='/vivoPhones' element={<NavBarOptions  vivoPhones={data.vivoPhones} />} />
      <Route excat path='/samsungPhones' element={<NavBarOptions  samsungPhone={data.samsungPhone} />} />

      </Routes>
      
      <Slider />

      <Offers offer={data.offer} />

      <Heading text="PRODUCTS" />

      <StarProduct starProduct={data.starProduct} />

      <Heading text="ACCESSORIES" />

      <HotAccessoriesMenu />
      

    <Routes>


    <Route excat path='/' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

      <Route excat path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

      <Route excat path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

      <Route excat path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />

      <Route excat path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />

      <Route excat path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
 
    </Routes>
    <Heading text="REVIEWS" />
    <ProductReview ProductReviews={data.productReviews} />

    <Heading text="VIDEOS" />
    <Videos videos={data.videos} />

    <Heading text="IN PRESS" />
    <Bannner banner={data.banner} />

    <Footer  />

    </Router>
  );
}

export default App;

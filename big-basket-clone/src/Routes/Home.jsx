import Navbar from "../Components/Navbar";
import CarouselTop from "../Components/CarouselTop";
import CarouselBottom from "../Components/CarouselBottom";
import Footer from "../Components/Footer";
import CategoryLinks from "../Components/CategoryLinks";
import BankOffers from "../Components/BankOffers";
import TopOffers from "../Components/TopOffers";
import YourDailyStaples from "../Components/YourDailyStaples"
import SnackStore from "../Components/SnackStore";
import CleaningHousehold from "../Components/CleaningHousehold";
import HomeKitchen from "../Components/HomeKitchen";
import BrandStore from "../Components/BrandStore";
import FruitVeg from "../Components/FruitVeg";
import Beverages from "../Components/Beverages";
import BeautyHygiene from "../Components/BeautyHygiene";

export default function Home(){
    return (<>
    <Navbar />
    <CarouselTop />
    <CategoryLinks />
    <BankOffers />
    <TopOffers />
    <FruitVeg />
    <YourDailyStaples />
    <Beverages />
    <SnackStore />
    <CleaningHousehold />
    <BeautyHygiene />
    <HomeKitchen />
    <CarouselBottom />
    <BrandStore />
    <Footer />
    </>)
}
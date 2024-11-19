import Customer from "./components/Customer";
import DressStyles from "./components/DressStyles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrival";
import Selling from "./components/Selling";
import Sponser from "./components/Sponser";


export default function Home (){
  return(
<div>
  <Navbar/>
  <Hero/>
  <Sponser/>
  <NewArrivals/>
  <Selling/>
  <DressStyles/>
  <Customer/>
</div>
  )
}
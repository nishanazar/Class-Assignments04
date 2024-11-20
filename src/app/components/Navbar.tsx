import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiMenuBurger } from "react-icons/ci";
export default function Home (){
return(
    <>
   <div className="lg:h-[38px] xl:w-[1440px] xl:h-[38px] lg:w-[1330px] h-[34px] w-[390px] sm:h-[34px] sm:w-[900px] bg-[#000000] text-[#FFFFFF] pl-[30px] py-[9px] md:p-[0px] ">
   <p className="relative lg:h-[19px] lg:w-[361px] bg-[#000000] sm:top-[9px] lg:left-[544px] lg:text-[13px] sm:text-[13px] sm:text-center  text-[10px] leading-[18.9px] ">Sign up and get 20% off to your first order<span className=" underline">Sign Up Now</span></p>
   <ImCross className="h-[20px] w-[20px] lg:relative bottom-2 md:left-[1320px] lg:block hidden " />
   </div>
    {/* icon */}
   <div className="relative h-[48px] w-[1240px] lg:top-[32px] top-[32px] left-[15px] lg:left-[100px] gap-4 flex" >
   <CiMenuBurger className="h-[24px] w-[24px] font-bold mt-3 sm:hidden " />
    <h3 className="md:h-[22px] md:w-[160px] h-[18px] w-[126px] md:text-[32px] text-[25px] leading-[38.4px]   text-[#000000] font-bold mt-1" >SHOP.CO</h3>
    <ul className="h-[22px] w-[321px] gap-4 md:text-[16px] mt-3 lg:flex sm:flex hidden">
    <li className="h-[22px] w-[57px]  gap-1 flex">Shop <div> <RiArrowDropDownLine className="h-8 w-8 pr-2"/></div></li>
    <li  className="h-[22px] w-[56px] ">OnSale</li>
    <li className="h-[22px] w-[87px] ">NewArrivals</li>
    <li className="h-[22px] w-[49px] ">Brands</li>
    </ul>
    <div className="h-[48px] w-[500px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 lg:flex sm:hidden  hidden" >
    <CiSearch className="h-[24px] w-[24px] " />
    <div className="h-[22px] w-[171px] text-[16px] text-[#00000066] ml-2 ">Search for products...</div>
    </div>
    <div className="lg:h-[24px] lg:w-[62px] h-[26px] w-[92px] lg:gap-[14px] flex lg:mt-4 mt-2 gap-3 ml-[60px] ">
    <CiSearch className="h-[35px] w-[35px]" />
    <FiShoppingCart className="h-[30px] w-[30px]" />
    <FaCreativeCommonsBy className="h-[30px] w-[30px]" />
    </div>
   </div>
   </>

    )
  }
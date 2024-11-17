import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { ImCross } from "react-icons/im";
export default function Home (){
return(
    <>
   <div className="h-[38px] w-[1440px] bg-[#000000] text-[#FFFFFF]">
    <p className="relative h-[19px] w-[361px] bg-[#000000] top-[9px] left-[544px] text-[14px] leading-[18.9px] ">Sign up and get 20% off to your first order.<span className=" underline">Sign Up Now</span></p>
    <ImCross className="h-[20px] w-[20px] relative bottom-2 left-[1320px] " />

   </div>


    {/* icon */}
   <div className="relative h-[48px] w-[1240px]  top-[32px] left-[100px] gap-10  flex" >
    <h3 className="h-[22px] w-[160px] text-[32px] leading-[38.4px]  text-[#000000] font-bold mt-1" >SHOP.CO</h3>
    <ul className="h-[22px] w-[321px] gap-4  flex text-[16px] mt-3">
    <li className="h-[22px] w-[57px]  gap-1 flex">Shop <div> <RiArrowDropDownLine className="h-8 w-8 pr-2"/></div></li>
    <li  className="h-[22px] w-[56px] ">OnSale</li>
    <li className="h-[22px] w-[87px] ">NewArrivals</li>
    <li className="h-[22px] w-[49px] ">Brands</li>
    </ul>

    <div className="h-[48px] w-[480px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 flex " >
    <CiSearch className="h-[24px] w-[24px]" />
    <div className="h-[22px] w-[171px] text-[16px] text-[#00000066] ml-2">Search for products...</div>
    </div>

    <div className="h-[24px] w-[62px] gap-[14px] flex mt-4 ">
    <FiShoppingCart className="h-5 w-5" />
    <FaCreativeCommonsBy />
    </div>
   </div>
   </>

    )
  }
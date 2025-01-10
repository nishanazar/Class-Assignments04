import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiMenuBurger } from "react-icons/ci";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet"
import { Menu } from "lucide-react";

export default function Home (){
return(
    <>
   <div className="lg:h-[38px] w-full mx-auto overflow-x-hidden  sm:h-[34px] bg-[#000000] text-[#FFFFFF] pl-[30px] py-[9px] md:p-[0px] ">
   <p className="relative lg:h-[19px] lg:w-[361px] bg-[#000000] sm:top-[9px] lg:left-[544px] lg:text-[13px] sm:text-[13px] sm:text-center  text-[10px] leading-[18.9px] ">Sign up and get 20% off to your first order<span className=" underline">Sign Up Now</span></p>
   <ImCross className="h-[20px] w-[20px] lg:relative bottom-2 md:left-[1320px] lg:block hidden " />
   </div>
    {/* icon */}
    {/* mAIN DIv */}
   <div className="relative h-[48px] w-[1240px] lg:top-[32px] top-[32px] left-[15px] lg:left-[100px] gap-4 flex" >

    {/* Header Section */}
     <h3 className="md:h-[22px] md:w-[160px] h-[18px] w-[126px] md:text-[32px] text-[25px] leading-[38.4px]   text-[#000000] font-bold mt-1" >SHOP.CO</h3>

     <div>
    <ul className="h-[22px] w-[321px] gap-4 md:text-[16px] mt-3 lg:flex sm:flex hidden">
    <li className="h-[22px] w-[57px]  gap-1 flex">
  
  

    </li>
    <Link href="/"><li  className="h-[22px] w-[56px] ">Shop</li></Link>
    <Link href="/product"><li  className="h-[22px] w-[56px] ">OnSale</li></Link>
    <Link href="/category"><li className="h-[22px] w-[87px] ">NewArrivals</li></Link>
    <Link href="/cart">  <li className="h-[22px] w-[49px] ">Cart</li></Link>
    </ul>
    </div>

    <div className="h-[48px] w-[500px] rounded-[62px] bg-[#F0F0F0] py-3 px-4 lg:flex sm:hidden  hidden lg:ml-7" >
    <CiSearch className="h-[24px] w-[24px] " />
    <div className="h-[22px] w-[171px]  text-[16px] text-[#00000066] ml-2 ">Search for products...

    </div>
    </div>
   
    <div className="lg:h-[100px] lg:w-[100px] h-[26px] w-[92px] lg:gap-[14px] flex gap-3 ml-4  ">
    <CiSearch className="h-[50px] w-[50px]" />
    <FiShoppingCart className="h-[50px] w-[50px]" />
    <FaCreativeCommonsBy className="h-[50px] w-[50px]" />
    </div>
    
    


    <Sheet>
    <SheetTrigger className="md:hidden mr-[30px]"> 
    <Menu />
    </SheetTrigger>
    <SheetContent>
    <h3 className="md:h-[22px] md:w-[160px] h-[18px] w-[126px] md:text-[32px] text-[25px] leading-[38.4px] space-y-4   text-[#000000] font-bold mt-1" >SHOP.CO</h3>
    <div className="space-y-5 flex flex-col mt-6">
    <Link href="/" className="h-[22px] w-[56px]">Home</Link>
    <Link href="/product"className="h-[22px] w-[56px] ">OnSale</Link>
    <Link href="/category"className="h-[22px] w-[87px] ">NewArrivals</Link>
    <Link href="/cart" className="h-[22px] w-[49px] ">Cart</Link>
    </div>
  </SheetContent>
</Sheet>
   </div>



   </>

    )
  }



import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image"

export default function Footer(){
    return(
        // outer
        <div className="lg:w-[1330px] xl-w-[1440px] lg:h-[499px] bg-[#F0F0F0] w-[393px] h-[846px]">
             {/* inner */}
            <div className="lg:w-[1030px] xl-w-[1140px] lg:h-[177px] relative lg:top-[130px] lg:left-[95px] lg:flex  lg:gap-24 ">

                <div className="h-[177px] w-[248px] ">
                <h3 className="lg:h-[22px] lg:w-[126px] lg:text-[33px]  leading-[38.4px] text-[#000000] font-bold lg:mt-1 w-[144px] h-[20px] text-[35px] lg:pt-0 ml-6 pt-4 " >SHOP.CO</h3>
                <p className="lg:text-sm lg:pt-5 pt-10 ml-6 lg:pb-9 ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                
                <div className="flex gap-3 lg:w-[148px] lg:h-[28px] lg:mt-0 ml-4 mt-8 ">
                <div className="h-[35px] w-[35px] rounded-full bg-[#FFFFFF]">
                <IoLogoTwitter className="ml-2 mt-2" />
                </div>
                <div className="h-[35px] w-[35px]  lg:rounded-full bg-[#000000] text-white">
                <RiFacebookFill className="ml-2 mt-2" />
                </div>
                <div className="h-[35px] w-[35px]  rounded-full bg-[#FFFFFF]">
                <FaInstagram className="ml-2 mt-2" />
                </div>
                <div className="h-[35px] w-[35px]  rounded-full bg-[#FFFFFF]">
                <IoLogoGithub className="ml-2 mt-2" />
                </div>
                </div>
</div>
<div className="flex ">

              <div className="lg:h-[177px] lg:w-[104px] w-[91px] h-[146px] lg:m-0 ml-8 mt-14">
                <h5 className="text-[18px] leading-[18px] mb-2 tracking-[2px]">COMPANY</h5>
                <ul className="text-[#00000099] space-y-4">
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                </ul>
              </div>


              <div className="lg:h-[177px] lg:w-[136px] w-[121px h-[146px] lg:mt-0 ml-[80px] mt-14">
                <h5 className="text-[18px] leading-[18px]  tracking-[3px]">HELP</h5>
                <ul className="text-[#00000099] space-y-4">
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms& Condition</li>
                    <li>Privacy Policy</li>
                </ul>
              </div>
              </div>

              <div className="flex lg:flex-none">
              <div className="lg:h-[177px] lg:w-[136px] w-[121px] h-[146px] lg:m-0 ml-8 mt-14">
                <h5 className="text-[18px] leading-[18px] mb-2 tracking-[3px]">FAQ</h5>
                <ul className="text-[#00000099] space-y-4">
                    <li>Account</li>
                    <li>Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                </ul>
              </div>

              <div className="lg:h-[177px] lg:w-[149px] lg:m-0 ml-[50px] mt-14 w-[159px] h-[146px] ">
                <h5 className="text-[18px] leading-[18px] mb-2 tracking-[3px] ">RESOURCEE</h5>
                <ul className="text-[#00000099] space-y-4">
                    <li>Free eBooks</li>
                    <li>Develop Tutorial</li>
                    <li>How to - Blog</li>
                    <li>Toutube Playlist</li>
                </ul>
              </div>
              </div>
           

              

            </div>
            <div className="border-[#0000001A] xl:w-[1240px] lg:w-[1040px] lg:left-[100px] w-[358px] top-[80px] border-[1px] relative lg:top-[200px] "></div>

              <div className="relative lg:top-[230px] lg:left-[100px] lg:flex lg:gap-[420px] top-[100px] lg-m-0 ml-10">
            <div className="w-[269px] h-[19px] text-right text-[14px] font-normal leading-[18px] lg:m-0 mb-5">Shop.co © 2000-2023, All Rights Reserved</div>
            <Image src={"/logo2.png"} alt={"logo2"} height={30} width={281}/>
            </div>
        </div>

    )
}
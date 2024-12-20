import Image from "next/image"
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import Product from "./Product";

export default function Selling(){
    return (
    <>
    <h5 className="lg:w-[403px] lg:h-[58px] lg:ml-[518px] lg:text-5xl lg:my-[50px] lg:font-bold text-center text-[#000000] w-[369px] h-[38px] font-extrabold  text-2xl my-5">TOP SELLING
    </h5>
    <div className="flex gap-7 justify-center">
    <div>
    {/* 1 */}
    <Image src={"/sell1.png"} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="lg:text-[17px] text-[12px]  font-bold py-2 ">VERTICAL STRIPED SHIRT</h5>
    <div className="text-[#FFC633] w-[150px] h-[19px] flex gap-1">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">5.5/0</p>
    </div>
    <div className="flex gap-4">
    <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">$212</h5>
    <h5 className="w-[51px] h-[32px] text-[24px] text-[#00000066] font-bold line-through">$232</h5>
    <h5 className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-[12px] mt-1 font-medium py-[6px] px-[14px]">-20%</h5>
    </div>
    </div>
    </div>
    <div className="">
    {/* 2 */}
    <Product name={"COURAGE GRAPHIC T-SHIRT"} p={"4.0/5"} h5={"$145"} src={"/sell2.png"}/>
    </div>
    <div className="lg:block hidden">
    {/* 3 */}
    <Product name={"LOOSE FIT BERMUDA SHORTS"} p={"3.0/5"} h5={"$80"} src={"/sell3.png"}/>
    </div>
    <div className="lg:block hidden">
    <Product name={"FADED SKINNY JEANS"} p={"4.5/5"} h5={"$210"} src={"/sell4.png"} icon={ <FaStarHalf />}/>
    {/* 4 */}
    </div>
    </div>
    <div className="lg:h-[52px] lg:w-[218px] relative top-[40px] rounded-[62px]  py-[16px] text-center text-[16px] font-medium leading-[21.6px] border-[1px] border-[#0000001A] lg:left-[544px] left-5">View all</div>
    </>

    )
}
import Image from "next/image"
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";



export default function NewArrivals(){
    return (
        <>
    
    <h5 className="lg:w-[403px] lg:h-[58px] lg:ml-[518px] lg:text-5xl lg:my-[50px] lg:font-bold text-center text-[#000000] w-[369px] h-[38px] font-extrabold   text-2xl lg:m-0 mt-[130px] mb-6">NEW ARRIVALS
    </h5>

    <div className="flex gap-7 justify-center ">

    <div className="lg:block hidden">
    <Image className="" src={"/shirt.png"} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="lg:text-[17px] text-[11px] font-bold py-2 ">T-SHIRT WITH TAPE DETAILS</h5>
    <div className="text-[#FFC633] w-[150px] h-[19px] flex gap-1">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <FaStarHalf />
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">4.5/5</p>
    </div>
    <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">$120</h5>
    </div>
    </div>



    <div>
    <Image src={"/jeans.png"} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="lg:text-[17px] text-[12px]  font-bold py-2 ">SKINNY FIT JEANS</h5>
    <div className="text-[#FFC633] lg:w-[150px] lg:h-[19px] w-[127px] h-[16px] flex gap-1">
    
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <FaStarHalf />
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">3.5/5</p>
    </div>
    <div className="flex gap-4">
    <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">$240</h5>
    <h5 className="w-[51px] h-[32px] text-[24px] text-[#00000066] font-bold line-through">$260</h5>
    <h5 className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-[12px] mt-1 font-medium py-[6px] px-[14px]">-20%</h5>
    </div>
    </div>
    </div>





<div className="lg:block hidden">
    <Image src={"/checked-shirt.png"} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="text-[17px] font-bold py-2  ">CHECKERED SHIRT</h5>
    <div className="text-[#FFC633] w-[150px] h-[19px] flex gap-1">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <FaStarHalf />
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">4.5/5</p>
    </div>
    <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">$180</h5>
    </div>
    </div>
    

   
   
    <div className="">
    <Image src={"/sripe4.png"} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="lg:text-[17px] text-[11px] font-bold py-2 ">SLEEVE STRIPED T-SHIRT</h5>
    <div className="text-[#FFC633] w-[150px] h-[19px] flex gap-1">
    
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <FaStarHalf />
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">3.5/5</p>
    </div>
    <div className="flex gap-4 ">
    <h5 className="lg:w-[55px] lg:h-[32px] w-[40px] h-[25px] text-[24px] text-[#000000] font-bold">$130</h5>
    <h5 className="w-[51px] h-[32px] text-[24px] text-[#00000066] font-bold line-through">$160</h5>
    <h5 className="w-[58px] h-[28px] rounded-[62px] bg-[#FF33331A] text-[#FF3333] text-[12px] mt-1 font-medium py-[6px] px-[14px]">-20%</h5>
    </div>

    </div>
    </div>
  
    
    
    
    
    
    
    </div>



    <div className="lg:h-[52px] lg:w-[218px] relative top-[40px] rounded-[62px] py-[16px] text-center text-[16px] font-medium leading-[21.6px] border-[1px] border-[#0000001A] lg:left-[544px] left-5">View all</div>
    
<hr className="lg:my-[90px] my-[50px] text-[#0000001A]" />




       
       

    
  
    </>

    )
}
import Image from "next/image";


export default function DressStyle(){
    return(
        <div className="lg:w-[1239px] lg:h-[780px] w-[358px] h-[975px] rounded-[40px] relative bg-[#F0F0F0] top-[110px] lg:m-0 ml-4">
            <h3 className="lg:w-[687px] lg:h-[58px] w-[246px] h-[72px] relative font-bold lg:text-[48px] text-[35px] lg:leading-[57px] leading-[32px] text-center lg:py-[50px] lg:left-[300px] left-[50px] top-[50px] lg:top-0 bottom ">BROWSE BY dress STYLE</h3>

            <div className="lg:flex lg:ml-[70px] mt-[50px] lg:gap-4  ">
            <Image className="pt-[20px] px-4  lg:p-0" src={"/style1.png"} alt={"style"} height={289} width={407}/>
            <Image className="pt-[20px] px-4  lg:p-0" src={"/style2.png"} alt={"style"} height={289} width={684}/>
            </div>

            <div className="lg:flex lg:ml-[70px] mt-4 gap-4">
            <Image className="pt-[10px] px-4  lg:p-0" src={"/style3.png"} alt={"style"} height={289} width={684}/>
            <Image className="pt-[20px] px-4  lg:p-0" src={"/style4.png"} alt={"style"} height={289} width={407}/>
            </div>
        </div>
    )
}
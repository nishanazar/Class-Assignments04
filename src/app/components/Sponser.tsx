import Image from "next/image"


export default function Sponser(){
    return (
        <div className="w-[390px] xl:w-[1440px] lg:h-[149px] lg:w-[1330px] bg-[#000000] text-[#FFFFFF] flex gap-4">
              <Image src={"/spon1.png"} alt={"shirt"} height={5} width={50}/>
           <Image src={'/sponser2.png'} alt={"logo"} width={2} height={2} />
           <Image src={'/sponser3.png'} alt={"logo"} width={63} height={26} />
           <Image src={'/sponser4.png'} alt={"logo"} width={63} height={26} />
           <Image src={'/sponser5.png'} alt={"logo"} width={63} height={26} />
     
        </div>

    )
}
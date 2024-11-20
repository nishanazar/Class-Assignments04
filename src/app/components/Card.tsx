import { IoIosStar } from "react-icons/io";
import Image from "next/image";

interface data {
    text : string;
    p: string;
}
export default function Card(props:data){
    return(
    <div>
    <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] border-[#0000001A]">
        <div className="m-8 ">
        <div className="flex gap-2 text-[#FFC633] h-[22px] ]">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        </div>
        <div className="flex">
        <h3 className="w-[92px] h-[15px] text-[20px] leading-[22px]  font-bold my-4">{props.text}</h3>
        <Image className="my-4" src={"/Frame.png"} alt={"icon"} height={24} width={24}/>
        </div>
        <p className="text-[16px] text-[#00000099] text-justify">{props.p}</p>
        </div>
        </div>
        </div>
    )
}
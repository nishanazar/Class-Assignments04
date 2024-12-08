import { IoIosStar } from "react-icons/io"
import Image from "next/image"

interface IProduct {
    name: string;
    p : string ;
    h5: string;
    icon?: React.ReactNode;
    src: string

    
}
const Product = (props: IProduct) => {
  const { name, p ,h5, icon, src} = props
  return (
    <div className="">
    <Image src={src} alt={"shirt"} height={292} width={270}/>
    <div>
    <h5 className="text-[17px] font-bold py-2  ">{name}</h5>
    <div className="text-[#FFC633] w-[150px] h-[19px] flex gap-1">
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    <IoIosStar />
    {icon}
    <p className="w-[33px] h-[19px] text-[14px] text-[#000000]">{p}</p>
    </div>
    <h5 className="w-[55px] h-[32px] text-[24px] text-[#000000] font-bold">{h5}</h5>
    </div>
    </div>
  )
}

export default Product
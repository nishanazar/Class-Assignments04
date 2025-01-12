import Image from "next/image"
import Product from "../components/Product"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../../components/ui/pagination"
import { Check, SlidersHorizontal } from "lucide-react"
import { TbMathGreater } from "react-icons/tb"
import Li from "../components/Li"
import Circle from "../components/Circle"
import Button from "../components/Button"

const CategoryPage = () => {
  return (
    <>
        <div className="lg:flex overflow-x-hidden w-full justify-center gap-10">
        {/* Side Div */}
        <div className="h-[1220px] w-[295px] m-4 md:hidden block lg:block mt-16 rounded-md p-8">
        <div className="w-[247px] h-[27px] flex justify-between ">
        <h2 className="text-xl font-bold w-[57px] h-[27px]">Filters</h2>
        <SlidersHorizontal className="w-6 h-6" />
        </div>
        <hr className=" w-[247px] my-4"/>
        {/* main div */}
        <div className="w-[247px] min-h-40 space-y-3">

       <Li text={"T-shirts"}/>
       <Li text={"Shorts"}/>
       <Li text={"Shirts"}/>
       <Li text={"Hoodie"}/>
       <Li text={"Jeans"}/>
       </div>

       <hr className=" w-[247px] my-4"/>

       <div className="w-[247px] h-[90px]">
       <h2 className="text-xl font-bold w-[48px] h-[27px]">Price</h2>
       <div className="w-[247px] h-[43px]  mt-3">
           <Image src="/loader.png" height={43} width={247} alt={"loader"}/>
       </div>
       </div>

       <hr className=" w-[247px] my-4"/>

       <h2 className="text-xl font-bold w-[48px] h-[27px]">Colors</h2>

       <div className="w-[247px] h-[90px] mt-4">
        <div className="flex gap-3">
        <Circle bgColor={"bg-[#00C12B]"}/>
        <Circle bgColor={"bg-[#F50606]"}/>
         <Circle bgColor={"bg-[#F5DD06]"}/>
         <Circle bgColor={"bg-[#F57906]"}/>
         <Circle bgColor={"bg-[#06CAF5]"}/>
        </div>

         <div className="flex gap-3 mt-4">
         <div className="w-[37px] h-[37px] bg-[#063AF5] rounded-full">
         <Check color="#eaf1ea" className="pt-1 ml-2" />
         </div>
         <Circle bgColor={"bg-[#7D06F5]"}/>
         <Circle bgColor={"bg-[#F506A4]"}/>
         <Circle bgColor={"bg-[#F0F0F0]"}/>
         <Circle bgColor={"bg-[#000000]"}/>
         </div>
         </div>
         <hr className="w-[247px] my-4"/>

         <div className="w-[247px] h-[274px] ">
         <h2 className="text-xl font-bold w-[48px] h-[27px]">Size</h2>
         <div className="w-[247px] h-[227px] text-[14px]">
         <div className="flex gap-4 mt-2 ">
         <div className="w-[125px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">XX-Small</div>
         <div className="w-[108px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">X-Small</div>
          </div>
          <div className="flex m-2 dap-3 gap-1">
          <div className="w-[74px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Small</div>
          <div className="w-[110px] h-[49px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Medium</div>
          </div>
          <div className="flex m-2 gap-1">
          <div className="w-[76px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">Large</div>
          <div className="w-[109px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">X-Large</div>
          </div>
          <div className="flex m-2 gap-1 ">
          <div className="w-[120px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">XX-Large</div>
          <div className="w-[117px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">3X-Large</div>
          </div> 
          <div className="w-[115px] h-[39px] rounded-[62px] py-3 px-6 bg-[#F0F0F0] hover:bg-black hover:text-white">4X-Large</div>
          </div>
          </div>
          <hr className=" w-[247px] my-4"/>
         <div className="w-[247px] h-[171px] space-y-5">
         <Li text={"Casual"}/>
         <Li text={"Formal"}/>
         <Li text={"Party"}/>
         <Li text={"Gym"}/>
         </div>
         <button className=" mt-5 w-[247px] h-[48px] bg-black rounded-[62px]  px-[54px] text-white">Apply Filter</button>
         </div>
         <div className="mt-16">
         <div>
        {/* Header Section */}
        <div className="flex justify-between items-center px-4 md:px-0">
        <h3 className="text-[32px] font-bold">Casual</h3>
        <p className="text-[16px] hidden md:block">Showing 1-10 of 100 Products <span className="font-bold">Sort by: Most Popular</span></p>
        </div>
        {/* Product Rows */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <Product name={"Gradient Graphic T-shirt"} p={"3.0/5"} h5={"$145"}  src={"/page2w.png"}/>
        <Product name={"Polo with Tipping Details"} p={"3.0/5"} h5={"$180"}  src={"/shirt3.png"}/>
        <Product name={"Black Striped T-shirt"} p={"4.5/5"} h5={"$120"}  src={"/shirt4.png"}/>
        </div>
         {/* Hidden Rows (Only visible on larger screens) */}
        <div className=" flex-wrap gap-4 mt-8 hidden md:flex">
        <Product name={"SKINNY FIT JEANS"} p={"3.5/5"} h5={"$240"}  src={"/jeans.png"}/>
        <Product name={"CHECKERED SHIRT"} p={"4.5/5"} h5={"$180"}  src={"/cate-pic.png"}/>
        <Product name={"SLEEVE STRIPED T-SHIRT"} p={"4.5/0"} h5={"$130"}  src={"/orange-shirt.png"}/>
        </div>

        {/* Another Row (Only visible on larger screens) */}
        <div className="lg:flex flex-wrap gap-4 mt-8 hidden md:flex">
        <Product name={"VERTICAL STRIPED SHIRT"} p={"5.5/5"} h5={"$212"}  src={"/1row.png"}/>
        <Product name={"COURAGE GRAPHIC T-SHIRT"} p={"4.0/5"} h5={"$145"}  src={"/3rdrow.png"}/>
        <Product name={"LOOSE FIT BERMUDA SHORTS"} p={"3.0/5"} h5={"$80"}  src={"/short-j.png"}/>
        </div>
        </div>
        {/* Pagination */}
          <Pagination className="flex justify-center my-8">
          <PaginationContent>
          <PaginationItem>
          <PaginationPrevious href="/" />
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#" isActive>2
          </PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
          <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
          <PaginationNext href="/category" />
          </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
    </>
  )
}

export default CategoryPage

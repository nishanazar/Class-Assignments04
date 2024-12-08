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

const CategoryPage = () => {
  return (
    <>
    <div className="lg:flex">
    <Image className="m-16 md:hidden block lg:block" src={"/side-pic.png"} alt={"side-pic"} height={1220} width={295} />
    <div className="mt-16">
    <div className="flex gap-[270px]"><h3 className="text-[32px] font-bold">Casual</h3>
    <p className="text-[16px] md:block hidden">Showing 1-10 of 100 Products <span className="font-bold">Sort by: Most Popular</span></p></div>

    {/* Row 1 */}
    <div className="md:flex gap-4 ml-11 md:ml-0 space-y-8 md:space-y-0">
    <Product name={"Gradient Graphic T-shirt"} p={"3.0/5"} h5={"$145"}  src={"/page2w.png"}/>
    <Product name={"Polo with Tipping Details"} p={"3.0/5"} h5={"$180"}  src={"/shirt3.png"}/>
    <Product name={"Black Striped T-shirt"} p={"4.5/5"} h5={"$120"}  src={"/shirt4.png"}/>
    </div>

    {/* Row 1 */}
    <div className="md:flex gap-4 mt-8 hidden">
    <Product name={"SKINNY FIT JEANS"} p={"3.5/5"} h5={"$240"}  src={"/jeans.png"}/>
    <Product name={"CHECKERED SHIRT"} p={"4.5/5"} h5={"$180"}  src={"/cate-pic.png"}/>
    <Product name={"SLEEVE STRIPED T-SHIRT"} p={"4.5/0"} h5={"$130"}  src={"/orange-shirt.png"}/>
    </div>

    {/* Row 1 */}
    <div className="md:flex gap-4 mt-8 hidden">
    <Product name={"VERTICAL STRIPED SHIRT"} p={"5.5/5"} h5={"$212"}  src={"/1row.png"}/>
    <Product name={"COURAGE GRAPHIC T-SHIRT"} p={"4.0/5"} h5={"$145"}  src={"/3rdrow.png"}/>
    <Product name={"LOOSE FIT BERMUDA SHORTS"} p={"3.0/5"} h5={"$80"}  src={"/short-j.png"}/>
    </div>
    </div>
    </div>

    <Pagination className="lg:ml-[400px] my-8 lg:my-0">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
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
   
    </>
  )
}

export default CategoryPage
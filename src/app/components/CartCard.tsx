"use client"

import Image from "next/image"

import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Trash2 } from "lucide-react"
import CountBtn from "./CountBtn"

import { Button } from "@/components/ui/button"


interface ICartCard {
    name: string;
    size: string;
    color: string;
    price: string;
    src: string
}

const CartCard = (props: ICartCard) => {
    const { name, size,color, price, src} = props


  

    return (
    <Card className="w-[667px] h-32 gap-4  flex justify-between text-black ">
    <Image src={src} alt={"card"} height={154} width={154}/>
    <CardHeader className=" mb-4">
    <CardDescription className="w-[277px] h-[27px] lg:text-[20px] leading-[27px] font-bold">{name}</CardDescription>
    <CardDescription className="text-sm font-normal w-[97px] h-[19px]">{size}</CardDescription>
    <CardDescription className="text-sm font-normal w-[87px] h-[19px]">{color}</CardDescription>
    <CardDescription className="text-sm  w-[54px] h-8 font-bold">{price}</CardDescription>
    </CardHeader>
   <div>
   <div className="">
    
  <div>
  <Button className="bg-current"
  
    onClick={() => { 
      toast.error(' Deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    
    }}
    >
    <Trash2 color="#d70404" strokeWidth={1.75} className="ml-[125px]" />
    </Button>
  </div>


   
 
   <div className="mt-8">
   <CountBtn/>
   </div>
   </div>
  
  </div>
  <ToastContainer />

  
</Card>

  )
}


export default CartCard
import React from 'react'
import Image from 'next/image'
interface ProductCardProps {
    product: {
        id: string
        title: string
        description: string
        price: number
        image: string
        thumbnail: string;
    }
    
}
const ProductCard = ({product}: ProductCardProps) => {
    const { id, title, description, price, image,thumbnail } = product
  return (
    <div className='text-white bg-slate-500 w-80 h-80 rounded-md p-4 my-8 mx-10'>
        <div className=''>
            <div className=''>
               <Image src={thumbnail} alt="" 
               width={320}
               height={80}
               /> 
            </div>
            
            <h2 className='text-[24px] font-semibold'>{title}</h2>
            <p>id : {id}</p>
        </div>

        <p className='mt-auto mb-0'>{price}</p>
    </div>
  )
}

export default ProductCard
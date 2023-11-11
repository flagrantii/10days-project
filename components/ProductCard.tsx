import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
console.log('ProductCardProps')
const ProductCard = ({product}: ProductCardProps) => {
    const { id, title, description, price, image,thumbnail } = product
  return (
    <Link href={`/product/${id}`}>
        <div className='text-white bg-slate-500 w-80 h-80 rounded-md p-4 my-8 mx-10 hover:bg-blue-700 transition'>
            <div className='w-full h-40'>
                <Image src={thumbnail} alt="" 
                    width={100}
                    height={100}
                /> 
            </div>
                            
            <h2 className='text-[24px] font-semibold'>{title}</h2>
            <p>id : {id}</p>
            <p className='mt-auto mb-0'>{price}</p>
        </div>
    </Link>
  )
}

export default ProductCard
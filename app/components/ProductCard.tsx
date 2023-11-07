import React from 'react'

interface ProductCardProps {
    product: {
        id: string
        title: string
        description: string
        price: number
        image: string
    }
    
}
const ProductCard = ({product}: ProductCardProps) => {
    const { id, title, description, price, image } = product
  return (
    <div className='bg-slate-500 w-64 h-80 rounded-md p-4 my-8 mx-10'>
        <div className='text-white'>
            <h2 className='text-[32px]'>{id} {title}</h2>
        </div>

        <p>{price}</p>
    </div>
  )
}

export default ProductCard
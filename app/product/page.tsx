import Image from "next/image"
import ProductCard from "../../components/ProductCard"

export default async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/products?limit=12', {
    cache : "no-cache"
  })
  const data = await res.json()

  return(
    <div>
      <div className="flex flex-wrap justify-center">
       {data.products.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

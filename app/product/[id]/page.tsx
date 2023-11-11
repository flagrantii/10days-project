'use client';
import React, { useState } from 'react';

interface PageProps {
    params: {
        id: string
        title: string
        description: string
        price: number
        thumbnail: string;
    }
}

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const Page = ({ params }: PageProps) => {
    const [product, setProduct] = useState<Product | null>(null);

    const fecthData = async () => {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await res.json();
        setProduct(data);
    }

    React.useEffect(() => {
        fecthData();
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
            {product ? (
                <>
                    <p>ID: {product.id}</p>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <img src={product.thumbnail} alt={product.title} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Page;

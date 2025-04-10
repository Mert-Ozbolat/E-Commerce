import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const FilteredProducts = () => {

    const product = useSelector((state) => state.product.filteredProducts)
    console.log("product", product);
    const { type } = useParams();
    console.log("params", type)

    return (
        <div>
            <div className='pt-16'>
                <div className='pl-14'>
                    <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
                </div>
                <div className='grid grid-cols-4 justify-items-center-center py-8 gap-12'>
                    {
                        product.filter((product) => product.type === type)
                            .map((product, index) => {
                                return (
                                    <div key={index}>
                                        <ProductCard
                                            id={product.id}
                                            name={product.name}
                                            text={product.text}
                                            img={product.image}
                                            price={product.price}
                                            color={product.color}
                                        ></ProductCard>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default FilteredProducts
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const FilteredProducts = () => {

    const product = useSelector((state) => state.product.filteredProducts)

    console.log("product", product);

    const { type } = useParams();


    return (
        <div>FilteredProducts</div>
    )
}

export default FilteredProducts
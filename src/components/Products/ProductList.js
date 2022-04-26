import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Product from '../../pages/Product'

function ProductList() {
    const products=[
        {
            title:'Juice Drinks',
            price:234,
            description:'Nature made another world',
            image:'../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg'
        },
        {
            title:'Juice Drinks',
            price:204,
            description:'Nature made another world',
            image:'../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg'
        },
        {
            title:'Juice Drinks',
            price:224,
            description:'Nature made another world',
            image:'../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg'
        }
    ]
  return (
    <div>
    
<h2>Product List</h2>
<FeaturedProducts products={products} />
<Product pname="testing"/>
    </div>
  )
}

export default ProductList
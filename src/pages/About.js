import React from 'react'
import FeaturedProducts from '../components/Products/FeaturedProducts'

export default function About() {
  const arr = ['A', 'B', 'C', 'D'];
  return (
    <div>
         
  <section className="about section-padding">
    <div className="container">
    <h2>About Component</h2>

    <FeaturedProducts pname="Tree pot" description="Original package design from house" price="34" />
    <FeaturedProducts pname="Tree pot" description="Original package design from house" price="34" />
    <FeaturedProducts pname={'Tree pot'} description={'Original package design from house'} price={34}  arr={arr}/>
    
    </div>
    </section>
    </div>
  )
}

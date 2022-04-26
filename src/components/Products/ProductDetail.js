import React from 'react'

import { useLocation } from 'react-router-dom';
import {  useParams } from "react-router-dom";
export default function ProductDetail() {
    let params = useParams();
    let location=useLocation();
    let data=location.state
    console.log(data)
  return (
    <div>



<section className="about section-padding">
    <div className="container">

        <h1>Product Detail Page</h1>
        <h2>Id= {params.id}</h2>
        <p>{data.map((res)=>{
          return (
            <h1> Id={res.id} and Name={res.fullName}</h1>
          )
        })}
       
    
        </p>
        </div>
 
        </section>

    </div>
  )
}

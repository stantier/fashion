import React from 'react'
import Navbar from '../components/common/Navbar';
import { Outlet, Link} from 'react-router-dom'
//import Users from './Home/User';

export default function Product(props) {
 console.log(props)
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];


  return (
    <div>
    <section class="products section-padding">
    <h2>Product Page Component</h2>

{/* {Users.map(result=>{
  return (
    <li>{result.name} and {result.rollNo}</li>
  )
})} */}

<div className="container">
 <h2>{props.pname}</h2>
 <Link to="list"> <button>Product List</button></Link>

 <Outlet />
</div>

</section>


        
    </div>
  )
}

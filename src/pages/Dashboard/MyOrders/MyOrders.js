import React, { useContext } from 'react';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Loading/Loading';

const MyOrders = () => {
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/orders?email=${user?.email}`;
    const {data:orders=[],isLoading}=useQuery({
        queryKey:['orders',user?.email],
        queryFn: async ()=>{
            const res= await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data= await res.json();
            return data;
        }
    });
    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold mb-4'>My Orders</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Product Name</th>

        <th>Category</th>
        <th>Payment</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
            orders.map((order,index)=><tr key={order._id}>
                <th>{index+1}</th>
                <td>{order.customer}</td>
                <td>{order.email}</td>
                <td>{order.productName}</td>
                <td>{order.category}</td>
                <td>
                  {
                    order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                  }
                  {
                     order.price && order.paid && <span className='text-primary'>Paid</span>
                  }
                </td>
                
              </tr>
              
              )
        }  
       
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
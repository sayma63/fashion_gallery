import React from 'react';
import {useQuery} from 'react-query'

const AllUsers = () => {
    const {data:users=[]}=useQuery({
      queryKey:['users'],
      queryFn : async()=>{
        const res= await fetch('http://localhost:5000/users');
        const data= await res.json();
        return data;
      }
    })
    return (
        <div>
            <h1 className='text-3xl text-primary font-bold'>All Users</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user,i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
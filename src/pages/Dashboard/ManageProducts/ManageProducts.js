import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';

const ManageProducts = () => {
    const { data: products,isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (err) {

            }

        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-primary font-bold'>Manage Products:{products?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 
                    <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr> */}
                        {
                            products.slice().reverse().map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src={product.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button class="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
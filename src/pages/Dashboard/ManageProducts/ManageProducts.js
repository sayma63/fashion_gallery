import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageProducts = () => {
    const [deletingProduct,setDeletingProduct]=useState(null);
    const closeModal= ()=>{
        setDeletingProduct(null)
    }
   
    
    const { data: products,isLoading,refetch } = useQuery({
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
    });
    const handleDeleteProduct=product=>{
        fetch(`http://localhost:5000/products/${product._id}`,{
            method:"DELETE",
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount >0){
                refetch()
                toast.success(`Product ${product.name} deleted SuccessFully`)
            }
           
        })
        
    }
   
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
                                <td>
                                <label onClick={()=>setDeletingProduct(product)} for="confirmation-modal" class="btn btn-sm  btn-error">Delete</label>
                                    
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingProduct.name}.It cannot be undone`}
                successAction={handleDeleteProduct}
                successButtonName='Delete'
                modalData={deletingProduct}

                closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;
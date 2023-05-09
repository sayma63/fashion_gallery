import React from 'react';

const OrderRow = ({index,mOrder}) => {
    const {productName,price,email,customer}=mOrder
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{customer}</td>
        <td>{email}</td>
        <td>{productName}</td>
       
        
        <td>{price}</td>
        
    </tr>
    );
};

export default OrderRow;
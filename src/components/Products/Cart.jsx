import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>

    return (
        <div>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12">            
                        <h5 className="clientlet"> Product Types:  ({totalUniqueItems})Total Items: ({totalItems})</h5>
                    
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.img} style={{ height: '6rem' }} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price} LKR</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td>
                                                <button className="btn btn-primary m-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    -</button>
                                                <button className="btn btn-primary m-2"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                <button className="btn btn-danger ms-2"
                                                    onClick={() => removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="col-auto ms-auto">
                    <br/>
                    <br/>
                        <h2 className="clientlet">Total Price: Rs.{cartTotal}</h2>
                    </div>
                    <br />
                    <div className="col-auto">
                    <br/>
                    <br/>
                        <button className="btn btn-danger m-2"
                            onClick={() => emptyCart()}>Clear Cart</button>
                        <br />
                        <button className="btn btn-primary m-2"><a href="/order/add" style={{ textDecoration: 'none', color: 'white' }}>Proceed to Checkout</a></button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cart
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const [products, setProducts] = useState(state)

    console.log(products);

    return (
        <div>
            <div className="container">
                {products?.map(product => {
                    <div className="row" key={product.id}>
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
                            <button className="btn btn-outline-dark me-4"><i className="fa fa-minus"></i></button>
                            <button className="btn btn-outline-dark"><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Cart